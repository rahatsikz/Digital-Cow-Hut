import { Schema, model } from "mongoose";
import { Breed, Category, Label, Location } from "./cow.constant";
import { CowModel, ICow } from "./cow.interface";

const cowSchema = new Schema<ICow>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    enum: Object.values(Location),
    required: true,
  },
  breed: {
    type: String,
    enum: Object.values(Breed),
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    enum: Object.values(Label),
    default: Label.ForSale,
  },
  category: {
    type: String,
    enum: Object.values(Category),
    required: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Cow = model<ICow, CowModel>("Cow", cowSchema);
