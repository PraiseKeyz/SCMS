import { Test, TestingModule } from '@nestjs/testing';
import { WardenService } from './warden.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('WardenService', () => {
  let service: WardenService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WardenService,
        {
          provide: PrismaService,
          useValue: {
            zone: { findUnique: jest.fn() },
            wardenCheckin: { create: jest.fn() },
          },
        },
      ],
    }).compile();

    service = module.get<WardenService>(WardenService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('checkin', () => {
    it('throws NotFoundException if zone does not exist', async () => {
      jest.spyOn(prisma.zone, 'findUnique').mockResolvedValue(null);
      await expect(service.checkin('user1', 'invalid')).rejects.toThrow(NotFoundException);
    });
  });
});
