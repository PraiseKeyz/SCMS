import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';
import { Role } from '../../generated/prisma';
import type { SafeUser } from '../common/constants/safe-user.constant';
import { ParkingService } from './parking.service';
import { UpdateZoneStatusDto } from './dto/update-zone-status.dto';
import { NearestZoneQueryDto } from './dto/nearest-zone-query.dto';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Public()
  @Get('zones')
  async getZones() {
    const zones = await this.parkingService.getZonesWithStatus();
    return { message: 'Zones retrieved', data: { zones } };
  }

  @Patch('zones/:id/status')
  @Roles(Role.WARDEN)
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateZoneStatusDto,
    @CurrentUser() user: SafeUser,
  ) {
    const status = await this.parkingService.updateZoneStatus(
      id,
      dto.status,
      user.id,
    );
    return { message: 'Zone status updated', data: { status } };
  }

  @Public()
  @Get('nearest')
  async nearest(@Query() query: NearestZoneQueryDto) {
    const result = await this.parkingService.getNearestZone(
      query.lat,
      query.lng,
    );
    return { message: 'Nearest zone calculated', data: result };
  }
}
