import { Body, Controller, Get, Post } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Role } from '../../generated/prisma';
import type { SafeUser } from '../common/constants/safe-user.constant';
import { WardenService } from './warden.service';
import { WardenCheckinDto } from './dto/warden-checkin.dto';

@Controller('wardens')
export class WardenController {
  constructor(private readonly wardenService: WardenService) {}

  @Post('checkin')
  @Roles(Role.WARDEN)
  async checkin(@Body() dto: WardenCheckinDto, @CurrentUser() user: SafeUser) {
    const checkin = await this.wardenService.checkin(user.id, dto.zoneId);
    return { message: 'Checked in', data: { checkin } };
  }

  @Get('deployment')
  @Roles(Role.ADMIN)
  async deployment() {
    const wardens = await this.wardenService.getDeployment();
    return { message: 'Deployment retrieved', data: { wardens } };
  }
}
