import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ max: 100 })
  age: number;

  @Prop()
  gender: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
