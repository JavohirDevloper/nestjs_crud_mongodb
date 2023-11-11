import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schemas/cars.schemas';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) readonly carModel: Model<Car>) {}
  create(createCarDto: CreateCarDto) {
    return this.carModel.create(createCarDto);
  }

  findAll() {
    return this.carModel.find();
  }

  findOne(id: string) {
    return this.carModel.findById(id);
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.carModel.findByIdAndUpdate(id, updateCarDto);
  }

  remove(id: string) {
    return this.carModel.findByIdAndDelete(id);
  }
}
