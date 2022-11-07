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

    async insertLocation(newLocation: Location) {
        const location = new this.locationModel({
            locationName: newLocation.locationName
        })
        const result = await location.save();
        return result;
    }
}
