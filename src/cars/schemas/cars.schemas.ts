import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop({ required: true })
  model: string;

  @Prop({ max: 100 })
  year: number;

  @Prop()
  color: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  user_id: User;
}

export const CarSchema = SchemaFactory.createForClass(Car);
