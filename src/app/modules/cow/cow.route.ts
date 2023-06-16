import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { CowValidate } from "./cow.validate";
import { CowController } from "./cow.controller";

const router = express.Router();

router.get("/:id", CowController.getSingleCow);
router.post(
  "/create-cow",
  validateRequest(CowValidate.createCowZodSchema),
  CowController.createCow
);
router.get("/", CowController.getAllCows);

export const CowRoutes = router;
