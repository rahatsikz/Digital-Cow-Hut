import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { ICow } from "./cow.interface";
import httpStatus from "http-status";
import { sendResponse } from "../../../shared/sendResponse";
import { CowService } from "./cow.service";
import { pick } from "../../../shared/pick";
import { cowFilterableFields, paginationFields } from "./cow.constant";

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

const getAllCows = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, cowFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await CowService.getAllCows(filters, paginationOptions);
  sendResponse<ICow[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cow created Successfully",
    meta: result.meta,
    data: result.data,
  });
});

export const CowController = {
  createCow,
  getAllCows,
};
