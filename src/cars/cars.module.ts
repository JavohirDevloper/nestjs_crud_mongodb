import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema, Car } from './schemas/cars.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],

  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
