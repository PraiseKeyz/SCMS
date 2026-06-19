import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '../../generated/prisma';

@Injectable()
export class WardenService {
  constructor(private readonly prisma: PrismaService) {}

  async checkin(wardenId: string, zoneId: string) {
    const zone = await this.prisma.zone.findUnique({ where: { id: zoneId } });
    if (!zone) {
      throw new NotFoundException(`Zone with ID ${zoneId} not found`);
    }

    return this.prisma.wardenCheckin.create({ data: { wardenId, zoneId } });
  }

  async getDeployment() {
    const wardens = await this.prisma.user.findMany({
      where: { role: Role.WARDEN },
      select: {
        id: true,
        name: true,
        email: true,
        checkins: { orderBy: { checkedIn: 'desc' }, take: 1, include: { zone: true } },
      },
    });

    return wardens.map((w) => ({
      id: w.id,
      name: w.name,
      email: w.email,
      currentZone: w.checkins[0]?.zone ?? null,
      checkedInAt: w.checkins[0]?.checkedIn ?? null,
    }));
  }
}
