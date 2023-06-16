import { z } from "zod";
import { Breed, Category, Label, Location } from "./cow.constant";

const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "name is required" }),
    age: z.number({ required_error: "age is required" }).positive(),
    price: z.number({ required_error: "price is required" }).positive(),
    location: z.enum([...Object.values(Location)] as [string, ...string[]], {
      required_error: "location is required",
    }),
    breed: z.enum([...Object.values(Breed)] as [string, ...string[]], {
      required_error: "breed is required",
    }),
    weight: z.number({ required_error: "weight is required" }).positive(),
    label: z.enum([...Object.values(Label)] as [string, ...string[]], {
      required_error: "label is required",
    }),
    category: z.enum([...Object.values(Category)] as [string, ...string[]], {
      required_error: "category is required",
    }),
    seller: z.string({ required_error: "seller is required" }),
  }),
});

export const CowValidate = {
  createCowZodSchema,
};
