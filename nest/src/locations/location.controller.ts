import { Controller, Get, Post } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller()
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  insertLocation(name: string) {
    return this.locationService.insertLocation(name);
  }
}