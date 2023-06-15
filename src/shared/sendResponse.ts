import { Response } from "express";

type IResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string | null;
  data: T | null;
};

export const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  const responseData: IResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    data: data.data || null,
  };

  res.status(data.statusCode).json(responseData);
};
