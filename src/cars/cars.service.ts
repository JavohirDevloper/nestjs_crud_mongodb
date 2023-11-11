import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './schemas/cars.schemas';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private readonly carModel: Model<CarDocument>,
  ) {}
  create(createCarDto: CreateCarDto) {
    return this.carModel.create(createCarDto);
  }

  findAll() {
    return this.carModel.find().populate('user_id');
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
