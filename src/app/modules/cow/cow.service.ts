import { SortOrder } from "mongoose";
import { PaginationHelpers } from "../../../helpers/PaginationHelpers";
import { IPaginationOptions } from "../../../interface/IPaginationOptions";
import { ICow, ICowFilters } from "./cow.interface";
import { Cow } from "./cow.model";
import { cowSearchableFields } from "./cow.constant";
import { IPaginationResponse } from "../../../interface/IPaginationResponse";
import { object } from "zod";

const createCow = async (payload: ICow): Promise<ICow> => {
  const result = (await Cow.create(payload)).populate("seller");
  return result;
};

const getAllCows = async (
  filters: ICowFilters,
  paginationOptions: IPaginationOptions
): Promise<IPaginationResponse<ICow[]>> => {
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: cowSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const { location, ...price } = filterData;

  const { minPrice, maxPrice } = price;

  let whereCondition: any = andConditions.length ? { $and: andConditions } : {};

  if (location) {
    whereCondition.location = { $eq: location };
  }

  if (minPrice) {
    whereCondition.price = { $gte: minPrice };
  }

  if (maxPrice) {
    whereCondition.price = { ...whereCondition.price, $lte: maxPrice };
  }
  const count = await Cow.countDocuments(whereCondition);

  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHelpers.calculatePagination(paginationOptions);

  const sortCondition: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const result = await Cow.find(whereCondition)
    .populate("seller")
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
  return {
    meta: {
      page,
      limit,
      count,
    },
    data: result,
  };
};

export const CowService = {
  createCow,
  getAllCows,
};
