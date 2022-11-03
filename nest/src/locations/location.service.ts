import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Location } from './location.model'

@Injectable()
export class LocationService {

    constructor(
        @InjectModel('Location') private readonly locationModel: Model<Location>
    ) {}

    async insertLocation(name: String) {
        const newLocation = new this.locationModel({
            name
        })
        const result = await newLocation.save();
        console.log(result);
        return 'created';
    }
}