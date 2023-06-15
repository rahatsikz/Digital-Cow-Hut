import express, {
  Application,
  NextFunction,
  Request,
  Response,
  json,
} from "express";
import ApiError from "./errors/ApiError";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import mongoose from "mongoose";
import httpStatus from "http-status";

const app: Application = express();

const { ValidationError } = mongoose.Error;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //   throw new ApiError(400, "Error Happened");
  //   next("error ashse");
  throw new ValidationError();
});

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api not found",
    errorMessages: [{ path: req.originalUrl, message: "Api not found" }],
  });
});

export default app;
