import express from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { UserValidate } from "./user.validate";

const router = express.Router();

router.get("/:id", UserController.getSingleUser);
router.post(
  "/create-user",
  validateRequest(UserValidate.createUserZodSchema),
  UserController.createUser
);

router.get("/", UserController.getAllUsers);

export const UserRoutes = router;
