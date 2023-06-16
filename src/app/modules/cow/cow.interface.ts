import { Model, Types } from "mongoose";
import { Breed, Category, Label } from "./cow.constant";

export type ICow = {
  name: string;
  age: number;
  price: number;
  location: Location;
  breed: Breed;
  weight: number;
  label: Label;
  category: Category;
  seller: Types.ObjectId;
};

export type CowModel = Model<ICow, Record<string, unknown>>;
