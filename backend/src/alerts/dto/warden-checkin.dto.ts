import { IsString } from 'class-validator';

export class WardenCheckinDto {
  @IsString()
  zoneId: string;
}
