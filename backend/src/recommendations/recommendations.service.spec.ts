import { Test, TestingModule } from '@nestjs/testing';
import {
  RecommendationsService,
  ZoneCandidate,
} from './recommendations.service';
import { BadRequestException } from '@nestjs/common';

describe('RecommendationsService', () => {
  let service: RecommendationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecommendationsService],
    }).compile();

    service = module.get<RecommendationsService>(RecommendationsService);
  });

  describe('recommendParkingZone', () => {
    it('returns empty when zones array is empty', () => {
      const result = service.recommendParkingZone({
        driverLat: 0,
        driverLng: 0,
        zones: [],
      });
      expect(result.recommendedZoneId).toBeNull();
      expect(result.rankedZones.length).toBe(0);
    });

    it('falls back to FULL zones if all candidates are FULL', () => {
      const zones: ZoneCandidate[] = [
        { zoneId: 'zone1', lat: 1, lng: 1, status: 'FULL' },
        { zoneId: 'zone2', lat: 2, lng: 2, status: 'FULL' },
      ];
      const result = service.recommendParkingZone({
        driverLat: 0,
        driverLng: 0,
        zones,
      });
      expect(result.recommendedZoneId).toBeDefined();
      expect(result.rankedZones.length).toBe(2);
    });

    it('orders by score descending, ties broken by zoneId ascending', () => {
      const zones: ZoneCandidate[] = [
        { zoneId: 'zoneB', lat: 1, lng: 1, status: 'AVAILABLE' },
        { zoneId: 'zoneA', lat: 1, lng: 1, status: 'AVAILABLE' },
      ];
      const result = service.recommendParkingZone({
        driverLat: 0,
        driverLng: 0,
        zones,
      });
      expect(result.rankedZones[0].zoneId).toBe('zoneA');
      expect(result.rankedZones[1].zoneId).toBe('zoneB');
    });

    it('ranks closer zone higher if occupancy is equal', () => {
      const zones: ZoneCandidate[] = [
        { zoneId: 'far', lat: 10, lng: 10, status: 'AVAILABLE' },
        { zoneId: 'near', lat: 1, lng: 1, status: 'AVAILABLE' },
      ];
      const result = service.recommendParkingZone({
        driverLat: 0,
        driverLng: 0,
        zones,
      });
      expect(result.recommendedZoneId).toBe('near');
      expect(result.rankedZones[0].zoneId).toBe('near');
    });
  });

  describe('estimateEta', () => {
    it('calculates monotonically increasing ETAs with crowd levels', () => {
      const origin = { lat: 0, lng: 0 };
      const destination = { lat: 1, lng: 1 };

      const lightEta = service.estimateEta({
        origin,
        destination,
        crowdLevel: 'light',
      }).etaSeconds;
      const moderateEta = service.estimateEta({
        origin,
        destination,
        crowdLevel: 'moderate',
      }).etaSeconds;
      const heavyEta = service.estimateEta({
        origin,
        destination,
        crowdLevel: 'heavy',
      }).etaSeconds;

      expect(lightEta).toBeLessThan(moderateEta);
      expect(moderateEta).toBeLessThan(heavyEta);
    });

    it('throws BadRequestException for invalid crowd levels', () => {
      const origin = { lat: 0, lng: 0 };
      const destination = { lat: 1, lng: 1 };
      expect(() => {
        service.estimateEta({
          origin,
          destination,
          crowdLevel: 'invalid' as any,
        });
      }).toThrow(BadRequestException);
    });
  });

  describe('detectAnomaly', () => {
    it('returns false when fewer than 4 timestamps', () => {
      const timestamps = [new Date(), new Date(), new Date()];
      const result = service.detectAnomaly({
        zoneId: 'z1',
        recentUpdateTimestamps: timestamps,
      });
      expect(result.isAnomaly).toBe(false);
    });

    it('handles zero variance by enforcing a minimum floor without divide-by-zero', () => {
      const now = new Date().getTime();
      const timestamps = [
        new Date(now),
        new Date(now + 1000),
        new Date(now + 2000),
        new Date(now + 3000),
        new Date(now + 4000), // All exactly 1000ms apart
      ];
      const result = service.detectAnomaly({
        zoneId: 'z1',
        recentUpdateTimestamps: timestamps,
      });
      expect(result.isAnomaly).toBe(false); // No anomaly because exactly the mean, z-score is 0
    });

    it('flags a genuine anomaly when variance is high', () => {
      const now = new Date().getTime();
      const timestamps = [
        new Date(now),
        new Date(now + 1000),
        new Date(now + 2000),
        new Date(now + 3000),
        new Date(now + 1000000), // Huge gap
      ];
      const result = service.detectAnomaly({
        zoneId: 'z1',
        recentUpdateTimestamps: timestamps,
      });
      expect(result.isAnomaly).toBe(true);
      expect(result.severity).toBeDefined();
    });
  });
});
