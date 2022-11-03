/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LocationController } from './location.controller';
import { locationSchema } from './location.model';
import { LocationService } from './location.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Location', schema: locationSchema }]),
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
