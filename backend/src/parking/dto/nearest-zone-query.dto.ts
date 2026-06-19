import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class NearestZoneQueryDto {
  @Type(() => Number)
  @IsNumber()
  lat: number;

  @Type(() => Number)
  @IsNumber()
  lng: number;
}
