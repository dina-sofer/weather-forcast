import { Body, Controller, Get, Post } from '@nestjs/common';
import { Location } from './location.model';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
    constructor (private locationService: LocationService) {}

    @Get()
    getAll() {
        try {
            return this.locationService.getAll();
        } catch (error) {
            console.log(error)
        }
    }

    @Post()
    insertLocation(@Body() newLocation: Location) {
        try {
            const result = this.locationService.insertLocation(newLocation);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}
