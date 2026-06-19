import { IsEnum } from 'class-validator';
import { ZoneStatusEnum } from '../../../generated/prisma';

export class UpdateZoneStatusDto {
  @IsEnum(ZoneStatusEnum)
  status: ZoneStatusEnum;
}
