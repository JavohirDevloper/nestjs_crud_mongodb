import { Types } from "mongoose";

export class CarEntity {
  readonly model: string;
  readonly year: number;
  readonly color: string;
  readonly user_id:  Types.ObjectId
}
