import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationController } from './location.controller';
import { LocationSchema } from './location.model';
import { LocationService } from './location.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Location', schema: LocationSchema}])],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
