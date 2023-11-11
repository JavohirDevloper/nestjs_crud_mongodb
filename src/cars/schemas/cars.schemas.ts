import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop({ required: true })
  model: string;

  @Prop({ max: 2024 })
  year: number;

  @Prop()
  color: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user_id: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
