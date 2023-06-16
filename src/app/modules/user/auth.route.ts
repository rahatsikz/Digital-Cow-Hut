import express from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { UserValidate } from "./user.validate";

const router = express.Router();

router.post(
  "/signup",
  validateRequest(UserValidate.createUserZodSchema),
  UserController.createUser
);

export const AuthRoutes = router;
