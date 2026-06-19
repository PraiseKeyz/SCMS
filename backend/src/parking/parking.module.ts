import { Module } from '@nestjs/common';
import { RecommendationsModule } from '../recommendations/recommendations.module';
import { ParkingController } from './parking.controller';
import { ParkingService } from './parking.service';
import { ParkingGateway } from './parking.gateway';

@Module({
  imports: [RecommendationsModule],
  controllers: [ParkingController],
  providers: [ParkingService, ParkingGateway],
  exports: [ParkingGateway],
})
export class ParkingModule {}
