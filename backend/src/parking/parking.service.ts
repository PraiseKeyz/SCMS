import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RecommendationsService } from '../recommendations/recommendations.service';
import { polygonCentroid } from '../recommendations/utils/geo.util';
import { ParkingGateway } from './parking.gateway';
import { ZoneStatusEnum } from '../../generated/prisma';

@Injectable()
export class ParkingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gateway: ParkingGateway,
    private readonly recommendations: RecommendationsService,
  ) {}

  async getZonesWithStatus() {
    const zones = await this.prisma.zone.findMany({
      include: { statuses: { orderBy: { updatedAt: 'desc' }, take: 1 } },
    });

    return zones.map((zone) => ({
      id: zone.id,
      name: zone.name,
      label: zone.label,
      capacity: zone.capacity,
      type: zone.type,
      geojson: zone.geojson,
      status: zone.statuses[0]?.status ?? ZoneStatusEnum.AVAILABLE,
      statusUpdatedAt: zone.statuses[0]?.updatedAt ?? null,
    }));
  }

  async updateZoneStatus(
    zoneId: string,
    status: ZoneStatusEnum,
    updatedById: string,
  ) {
    const zone = await this.prisma.zone.findUnique({ where: { id: zoneId } });
    if (!zone) throw new NotFoundException(`Zone with ID ${zoneId} not found`);

    const zoneStatus = await this.prisma.zoneStatus.create({
      data: { zoneId, status, updatedById },
    });

    this.gateway.emitZoneStatusUpdated({
      zoneId,
      status: zoneStatus.status,
      updatedAt: zoneStatus.updatedAt,
    });

    return zoneStatus;
  }

  async getNearestZone(lat: number, lng: number) {
    const zones = await this.getZonesWithStatus();

    const candidates = zones
      .filter((z) => z.type === 'PARKING')
      .map((z) => ({
        zoneId: z.id,
        ...polygonCentroid(z.geojson),
        status: z.status,
      }));

    return this.recommendations.recommendParkingZone({
      driverLat: lat,
      driverLng: lng,
      zones: candidates,
    });
  }
}
