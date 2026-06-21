import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AlertsGateway } from './alerts.gateway';
import { BroadcastAlertDto } from './dto/broadcast-alert.dto';
import { CreateIncidentDto } from './dto/create-incident.dto';

@Injectable()
export class AlertsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gateway: AlertsGateway,
  ) {}

  async broadcast(dto: BroadcastAlertDto, createdById: string) {
    const expiresAt = new Date(dto.expiresAt);
    if (expiresAt <= new Date()) {
      throw new BadRequestException('expiresAt must be in the future');
    }

    const alert = await this.prisma.broadcastAlert.create({
      data: { ...dto, expiresAt, createdById },
    });

    this.gateway.emitBroadcast(alert);
    return alert;
  }

  async createIncident(dto: CreateIncidentDto, reportedById: string) {
    const incident = await this.prisma.incident.create({
      data: { ...dto, reportedById },
    });

    this.gateway.emitIncident({
      type: incident.type,
      latitude: Number(incident.latitude),
      longitude: Number(incident.longitude),
    });
    return incident;
  }

  async getActiveAlerts() {
    return this.prisma.broadcastAlert.findMany({
      where: { active: true, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async resolveIncident(id: string) {
    const incident = await this.prisma.incident.findUnique({ where: { id } });
    if (!incident) throw new NotFoundException('Incident not found');
    if (incident.resolved) return incident;

    return this.prisma.incident.update({
      where: { id },
      data: { resolved: true },
    });
  }
}
