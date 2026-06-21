import { Controller, Get } from '@nestjs/common';
import { Public } from '@/common/decorators/public.decorator.js';
import { CampusService } from './campus.service.js';

@Controller('campus')
@Public()
export class CampusController {
  constructor(private readonly campusService: CampusService) {}

  @Get('map')
  async getMap() {
    const data = await this.campusService.getMapBundle();
    return { message: 'Campus map retrieved', data };
  }

  @Get('zones')
  async getZones() {
    const zones = await this.campusService.getZonesAsGeoJSON();
    return { message: 'Zones retrieved', data: zones };
  }

  @Get('gates')
  async getGates() {
    const gates = await this.campusService.getGates();
    return { message: 'Gates retrieved', data: { gates } };
  }

  @Get('landmarks')
  async getLandmarks() {
    const landmarks = await this.campusService.getLandmarks();
    return { message: 'Landmarks retrieved', data: { landmarks } };
  }
}
