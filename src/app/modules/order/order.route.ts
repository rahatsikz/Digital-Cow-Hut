import express from "express";
import { OrderController } from "./order.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { OrderValidate } from "./order.validate";

const router = express.Router();

router.post(
  "/create-order",
  validateRequest(OrderValidate.createOrderZodSchema),
  OrderController.createOrder
);

export const OrderRoutes = router;
