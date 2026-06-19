import { Test, TestingModule } from '@nestjs/testing';
import { ParkingService } from './parking.service';
import { PrismaService } from '../prisma/prisma.service';
import { RecommendationsService } from '../recommendations/recommendations.service';
import { ParkingGateway } from './parking.gateway';
import { NotFoundException } from '@nestjs/common';
import { ZoneStatusEnum } from '../../generated/prisma';

describe('ParkingService', () => {
  let service: ParkingService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ParkingService,
        {
          provide: PrismaService,
          useValue: {
            zone: { findMany: jest.fn(), findUnique: jest.fn() },
            zoneStatus: { create: jest.fn() },
          },
        },
        {
          provide: ParkingGateway,
          useValue: { emitZoneStatusUpdated: jest.fn() },
        },
        RecommendationsService,
      ],
    }).compile();

    service = module.get<ParkingService>(ParkingService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('getZonesWithStatus', () => {
    it('defaults to AVAILABLE if no statuses exist', async () => {
      jest.spyOn(prisma.zone, 'findMany').mockResolvedValue([
        { id: '1', name: 'Z1', label: 'Z1', capacity: 10, type: 'PARKING', geojson: {}, statuses: [] } as any,
      ]);
      const result = await service.getZonesWithStatus();
      expect(result[0].status).toBe(ZoneStatusEnum.AVAILABLE);
    });
  });

  describe('updateZoneStatus', () => {
    it('throws NotFoundException if zone does not exist', async () => {
      jest.spyOn(prisma.zone, 'findUnique').mockResolvedValue(null);
      await expect(service.updateZoneStatus('invalid', ZoneStatusEnum.FULL, 'user')).rejects.toThrow(NotFoundException);
    });
  });
});
