import { z } from "zod";
import { UserRole } from "./user.constant";

const createUserZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({ required_error: "First name is required" }),
      lastName: z.string({ required_error: "Last name is required" }),
    }),
    password: z.string({ required_error: "Password is required" }),
    phoneNumber: z.string({ required_error: "Phone number is required" }),
    role: z.enum([...UserRole] as [string, ...string[]], {
      required_error: "User role is required",
    }),
    address: z.string({ required_error: "Address is required" }),
    budget: z.number({ required_error: "Budget is required" }).min(0, {
      message: "Budget must be a positive number",
    }),
    income: z.number({ required_error: "Income is required" }).min(0, {
      message: "Income must be a positive number",
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    name: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
      })
      .optional(),
    password: z.string().optional(),
    phoneNumber: z.string().optional(),
    role: z.enum([...UserRole] as [string, ...string[]]).optional(),
    address: z.string().optional(),
    budget: z.number().min(0).optional(),
    income: z.number().min(0).optional(),
  }),
});

export const UserValidate = {
  createUserZodSchema,
  updateUserZodSchema,
};
