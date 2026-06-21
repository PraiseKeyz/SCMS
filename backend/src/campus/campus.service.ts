import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service.js';

@Injectable()
export class CampusService {
  constructor(private readonly prisma: PrismaService) {}

  async getZonesAsGeoJSON() {
    const zones = await this.prisma.zone.findMany();

    return {
      type: 'FeatureCollection',
      features: zones.map((zone) => ({
        type: 'Feature',
        geometry: zone.geojson,
        properties: {
          id: zone.id,
          name: zone.name,
          label: zone.label,
          capacity: zone.capacity,
          type: zone.type,
        },
      })),
    };
  }

  getGates() {
    return this.prisma.gate.findMany();
  }

  getLandmarks() {
    return this.prisma.landmark.findMany();
  }

  async getMapBundle() {
    const [zones, gates, landmarks] = await Promise.all([
      this.getZonesAsGeoJSON(),
      this.getGates(),
      this.getLandmarks(),
    ]);

    return { zones, gates, landmarks };
  }
}
