import { IsEnum, IsNumber, IsString } from 'class-validator';
import { IncidentType } from '../../../generated/prisma';

export class CreateIncidentDto {
  @IsEnum(IncidentType)
  type: IncidentType;

  @IsString()
  description: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
