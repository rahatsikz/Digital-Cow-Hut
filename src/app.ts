import express, { Application, NextFunction, Request, Response } from "express";
import ApiError from "./errors/ApiError";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import mongoose from "mongoose";

const app: Application = express();

const { ValidationError } = mongoose.Error;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //   throw new ApiError(400, "Error Happened");
  //   next("error ashse");
  throw new ValidationError();
});

app.use(globalErrorHandler);

export default app;
