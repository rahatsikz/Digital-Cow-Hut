import { Model, Types } from "mongoose";
import { Breed, Category, Label } from "./cow.constant";
import { number } from "zod";

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

export type ICowFilters = {
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  searchTerm?: string;
};

export type CowModel = Model<ICow, Record<string, unknown>>;
