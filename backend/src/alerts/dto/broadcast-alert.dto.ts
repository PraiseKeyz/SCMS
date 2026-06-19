import { IsDateString, IsInt, IsNumber, IsString, Min } from 'class-validator';

export class BroadcastAlertDto {
  @IsString()
  message: string;

  @IsInt()
  @Min(1)
  radiusMeters: number;

  @IsNumber()
  centerLat: number;

  @IsNumber()
  centerLng: number;

  @IsDateString()
  expiresAt: string;
}
