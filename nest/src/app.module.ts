import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LocationModule } from './location/location.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Dina:dinasofer0665@weather.ka99bh8.mongodb.net/weather?retryWrites=true&w=majority'
    ),
    LocationModule
  ],
})
export class AppModule {}
