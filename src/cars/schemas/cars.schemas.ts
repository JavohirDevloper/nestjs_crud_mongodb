import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({ required: true })
  model: string;

  @Prop({ max: 100 })
  year: number;

  @Prop()
  color: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  user_id: User;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
