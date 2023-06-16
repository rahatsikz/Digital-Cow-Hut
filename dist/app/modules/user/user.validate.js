"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidate = void 0;
const zod_1 = require("zod");
const user_constant_1 = require("./user.constant");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string({ required_error: "First name is required" }),
            lastName: zod_1.z.string({ required_error: "Last name is required" }),
        }),
        password: zod_1.z.string({ required_error: "Password is required" }),
        phoneNumber: zod_1.z.string({ required_error: "Phone number is required" }),
        role: zod_1.z.enum([...user_constant_1.UserRole], {
            required_error: "User role is required",
        }),
        address: zod_1.z.string({ required_error: "Address is required" }),
        budget: zod_1.z.number({ required_error: "Budget is required" }).min(0, {
            message: "Budget must be a positive number",
        }),
        income: zod_1.z.number({ required_error: "Income is required" }).min(0, {
            message: "Income must be a positive number",
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .object({
            firstName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
        })
            .optional(),
        password: zod_1.z.string().optional(),
        phoneNumber: zod_1.z.string().optional(),
        role: zod_1.z.enum([...user_constant_1.UserRole]).optional(),
        address: zod_1.z.string().optional(),
        budget: zod_1.z.number().min(0).optional(),
        income: zod_1.z.number().min(0).optional(),
    }),
});
exports.UserValidate = {
    createUserZodSchema,
    updateUserZodSchema,
};
