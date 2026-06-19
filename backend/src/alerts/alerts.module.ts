import { Module } from '@nestjs/common';
import { AlertsController } from './alerts.controller';
import { AlertsService } from './alerts.service';
import { AlertsGateway } from './alerts.gateway';
import { WardenController } from './warden.controller';
import { WardenService } from './warden.service';

@Module({
  controllers: [AlertsController, WardenController],
  providers: [AlertsService, AlertsGateway, WardenService],
})
export class AlertsModule {}
