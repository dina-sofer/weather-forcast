import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Get('/:id')
    getById(@Param('id') id: string) {
        console.log('99999999999')
        try {
            return this.locationService.getById(id);
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

    @Put('/:id')
    updateLocation(@Param('id') id, @Body() newLocation: Location) {
        try {
            const result = this.locationService.updateLocation(id, newLocation);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    @Delete('/:id')
    deleteLocation(@Param('id') id) {
        try {
            const result = this.locationService.deleteLocation(id);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}
