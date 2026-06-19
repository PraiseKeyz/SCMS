import { Test, TestingModule } from '@nestjs/testing';
import { AlertsService } from './alerts.service';
import { PrismaService } from '../prisma/prisma.service';
import { AlertsGateway } from './alerts.gateway';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('AlertsService', () => {
  let service: AlertsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlertsService,
        {
          provide: PrismaService,
          useValue: {
            broadcastAlert: { create: jest.fn(), findMany: jest.fn() },
            incident: { create: jest.fn(), findUnique: jest.fn(), update: jest.fn() },
          },
        },
        {
          provide: AlertsGateway,
          useValue: { emitBroadcast: jest.fn(), emitIncident: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<AlertsService>(AlertsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('broadcast', () => {
    it('throws BadRequestException if expiresAt is in the past', async () => {
      const pastDate = new Date(Date.now() - 10000).toISOString();
      await expect(service.broadcast({ message: 'test', radiusMeters: 10, centerLat: 0, centerLng: 0, expiresAt: pastDate }, 'user'))
        .rejects.toThrow(BadRequestException);
    });
  });

  describe('resolveIncident', () => {
    it('throws NotFoundException if incident not found', async () => {
      jest.spyOn(prisma.incident, 'findUnique').mockResolvedValue(null);
      await expect(service.resolveIncident('invalid')).rejects.toThrow(NotFoundException);
    });

    it('returns incident immediately if already resolved (idempotent)', async () => {
      const incident = { id: '1', resolved: true } as any;
      jest.spyOn(prisma.incident, 'findUnique').mockResolvedValue(incident);
      const updateSpy = jest.spyOn(prisma.incident, 'update');
      
      const result = await service.resolveIncident('1');
      expect(result).toEqual(incident);
      expect(updateSpy).not.toHaveBeenCalled();
    });
  });
});
