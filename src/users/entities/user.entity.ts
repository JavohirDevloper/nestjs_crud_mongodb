import {
  IsAlpha,
  IsAlphanumeric,
  IsEmpty,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UserEntity {
  @IsEmpty()
  i_d?: string;

  @IsAlpha()
  @IsString()
  username: string;

  @IsNumber()
  @IsInt()
  age: string;

  @IsNotEmpty()
  gender: string;

  @IsAlphanumeric()
  password: string;
}
