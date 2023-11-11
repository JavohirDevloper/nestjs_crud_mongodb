import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    CarsModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
  ],  
  exports: [],
  controllers: [AppController, CarsController],
  providers: [AppService, CarsService],
})
export class AppModule {}
