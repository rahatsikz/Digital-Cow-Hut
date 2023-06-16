import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { ICow } from "./cow.interface";
import httpStatus from "http-status";
import { sendResponse } from "../../../shared/sendResponse";
import { CowService } from "./cow.service";

const createCow = catchAsync(async (req: Request, res: Response) => {
  const { ...cow } = req.body;

  const result = await CowService.createCow(cow);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cow created Successfully",
    data: result,
  });
});

export const CowController = {
  createCow,
};
