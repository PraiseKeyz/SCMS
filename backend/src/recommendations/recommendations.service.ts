import { BadRequestException, Injectable } from '@nestjs/common';
import { haversineDistanceMeters, LatLng } from './utils/geo.util';

export type ZoneStatusLevel = 'AVAILABLE' | 'LIMITED' | 'FULL';

export interface ZoneCandidate extends LatLng {
  zoneId: string;
  status: ZoneStatusLevel;
}

export interface RankedZone {
  zoneId: string;
  score: number;
  walkDistanceM: number;
  occupancyPct: number;
}

// Schema only stores a status enum, not a numeric occupancy count, so we
// approximate occupancy from status. Tune these if real counts get added.
const OCCUPANCY_BY_STATUS: Record<ZoneStatusLevel, number> = {
  AVAILABLE: 0.15,
  LIMITED: 0.6,
  FULL: 0.97,
};

const CROWD_MULTIPLIER = { light: 1.0, moderate: 1.4, heavy: 1.9 } as const;
const BASE_WALK_SPEED_MPS = 1.2;

// Rough campus-pattern defaults for the demo — replace with real numbers if
// you get attendance/timetable data before judging.
const CROWD_LOOKUP: Record<string, Record<string, keyof typeof CROWD_MULTIPLIER>> = {
  classes: { morning: 'heavy', afternoon: 'moderate', evening: 'light' },
  exam: { morning: 'heavy', afternoon: 'heavy', evening: 'moderate' },
  event: { morning: 'moderate', afternoon: 'heavy', evening: 'heavy' },
  none: { morning: 'light', afternoon: 'light', evening: 'light' },
};

@Injectable()
export class RecommendationsService {
  recommendParkingZone(input: {
    driverLat: number;
    driverLng: number;
    zones: ZoneCandidate[];
    excludeFull?: boolean;
  }): { recommendedZoneId: string | null; rankedZones: RankedZone[] } {
    const { driverLat, driverLng, zones, excludeFull = true } = input;

    if (!zones || zones.length === 0) {
      return { recommendedZoneId: null, rankedZones: [] };
    }

    const pool = excludeFull
      ? zones.filter((z) => z.status !== 'FULL')
      : zones;
    const candidates = pool.length ? pool : zones; // fallback if everything's full

    const withDistance = candidates.map((z) => ({
      ...z,
      distance: haversineDistanceMeters({ lat: driverLat, lng: driverLng }, z),
    }));

    const maxDistance = Math.max(...withDistance.map((z) => z.distance), 1);

    const ranked: RankedZone[] = withDistance
      .map((z) => {
        const normalizedDistance = z.distance / maxDistance;
        const occupancyRatio = OCCUPANCY_BY_STATUS[z.status];
        const score =
          0.6 * (1 - normalizedDistance) + 0.4 * (1 - occupancyRatio);

        return {
          zoneId: z.zoneId,
          score: Math.round(score * 1000) / 1000,
          walkDistanceM: Math.round(z.distance),
          occupancyPct: Math.round(occupancyRatio * 100),
        };
      })
      .sort((a, b) => {
        if (b.score === a.score) {
          return a.zoneId.localeCompare(b.zoneId);
        }
        return b.score - a.score;
      });

    return {
      recommendedZoneId: ranked[0]?.zoneId ?? null,
      rankedZones: ranked,
    };
  }

  estimateEta(input: {
    origin: LatLng;
    destination: LatLng;
    crowdLevel: keyof typeof CROWD_MULTIPLIER;
  }): { distanceM: number; etaSeconds: number } {
    if (!(input.crowdLevel in CROWD_MULTIPLIER)) {
      throw new BadRequestException(`Invalid crowdLevel: ${input.crowdLevel}`);
    }

    const distance = haversineDistanceMeters(input.origin, input.destination);
    const multiplier = CROWD_MULTIPLIER[input.crowdLevel];
    const etaSeconds = (distance / BASE_WALK_SPEED_MPS) * multiplier;

    return { distanceM: Math.round(distance), etaSeconds: Math.round(etaSeconds) };
  }

  predictCrowd(input: { eventType: string; hoursAhead: number }): {
    crowdLevel: keyof typeof CROWD_MULTIPLIER;
  } {
    const band =
      input.hoursAhead < 6 ? 'morning' : input.hoursAhead < 14 ? 'afternoon' : 'evening';

    const table = CROWD_LOOKUP[input.eventType] ?? CROWD_LOOKUP.none;
    return { crowdLevel: table[band] };
  }

  detectAnomaly(input: { zoneId: string; recentUpdateTimestamps: Date[] }): {
    isAnomaly: boolean;
    reason: string | null;
    severity: 'low' | 'medium' | 'high' | null;
  } {
    const timestamps = [...input.recentUpdateTimestamps].sort(
      (a, b) => a.getTime() - b.getTime(),
    );
    if (timestamps.length < 4) {
      return { isAnomaly: false, reason: null, severity: null };
    }

    const intervals: number[] = [];
    for (let i = 1; i < timestamps.length; i++) {
      intervals.push(timestamps[i].getTime() - timestamps[i - 1].getTime());
    }

    const latest = intervals[intervals.length - 1];
    const history = intervals.slice(0, -1);
    const mean = history.reduce((a, b) => a + b, 0) / history.length;
    const variance =
      history.reduce((sum, v) => sum + (v - mean) ** 2, 0) / history.length;
    const stdDev = Math.max(Math.sqrt(variance), 1); // enforce minimum floor

    const zScore = (latest - mean) / stdDev;

    if (Math.abs(zScore) < 2) {
      return { isAnomaly: false, reason: null, severity: null };
    }

    const severity = Math.abs(zScore) > 3.5 ? 'high' : Math.abs(zScore) > 2.5 ? 'medium' : 'low';
    const reason =
      zScore < 0
        ? 'Zone status updating far more frequently than usual'
        : 'Zone status has gone unusually long without an update';

    return { isAnomaly: true, reason, severity };
  }
}
