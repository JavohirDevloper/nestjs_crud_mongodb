import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CarsModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}