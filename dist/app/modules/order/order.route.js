"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const order_validate_1 = require("./order.validate");
const router = express_1.default.Router();
router.post("/create-order", (0, validateRequest_1.validateRequest)(order_validate_1.OrderValidate.createOrderZodSchema), order_controller_1.OrderController.createOrder);
router.get("/", order_controller_1.OrderController.getAllOrders);
exports.OrderRoutes = router;
