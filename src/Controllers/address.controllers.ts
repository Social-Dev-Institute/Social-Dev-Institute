import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import addressService from "../Services/address/getAllAddress.service";
import addressByIdService from "../Services/address/getByIdAddress.service";

const allAddressController = async (req: Request, res: Response) => {
  try {
    const allAddress = await addressService();

    return res.status(200).json(allAddress);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const addressByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const allAddress = await addressByIdService(id);

    return res.status(200).json(allAddress);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { allAddressController, addressByIdController };
