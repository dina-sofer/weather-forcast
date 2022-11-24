import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location } from './location.model';

@Injectable()
export class LocationService {
    constructor( @InjectModel('Location') private readonly locationModel: Model<Location>) {}

    async getAll() {
        const result = await this.locationModel.find();
        return result as  Location[];
    }

    async getById(id: string) {
        const result = await this.locationModel.findOne({_id: id});
        return result as  Location;
    }

    async insertLocation(newLocation: Location) {
        const location = new this.locationModel({
            locationName: newLocation.locationName,
            temp: newLocation.temp,
            humidity: newLocation.humidity
        })
        const result = await location.save();
        return result;
    }

    async updateLocation(id, newLocation: Location) {
        const location = new this.locationModel({
            locationName: newLocation.locationName,
            temp: newLocation.temp,
            humidity: newLocation.humidity
        })
        const result = await this.locationModel.findByIdAndUpdate(id, newLocation);
        return 'updated';
    }

    async deleteLocation(id) {
        const result = await this.locationModel.findByIdAndDelete(id);
        return 'deleted';
    }
}
