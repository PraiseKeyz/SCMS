import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';
import { Role } from '../../generated/prisma';
import type { SafeUser } from '../common/constants/safe-user.constant';
import { AlertsService } from './alerts.service';
import { BroadcastAlertDto } from './dto/broadcast-alert.dto';
import { CreateIncidentDto } from './dto/create-incident.dto';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Post('broadcast')
  @Roles(Role.WARDEN)
  async broadcast(
    @Body() dto: BroadcastAlertDto,
    @CurrentUser() user: SafeUser,
  ) {
    const alert = await this.alertsService.broadcast(dto, user.id);
    return { message: 'Alert broadcast', data: { alert } };
  }

  @Post('incident')
  @Roles(Role.WARDEN)
  async createIncident(
    @Body() dto: CreateIncidentDto,
    @CurrentUser() user: SafeUser,
  ) {
    const incident = await this.alertsService.createIncident(dto, user.id);
    return { message: 'Incident logged', data: { incident } };
  }

  @Public()
  @Get('active')
  async getActive() {
    const alerts = await this.alertsService.getActiveAlerts();
    return { message: 'Active alerts retrieved', data: { alerts } };
  }

  @Patch('incident/:id/resolve')
  @Roles(Role.WARDEN)
  async resolve(@Param('id') id: string) {
    const incident = await this.alertsService.resolveIncident(id);
    return { message: 'Incident resolved', data: { incident } };
  }
}
