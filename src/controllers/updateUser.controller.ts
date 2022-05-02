import { Request, Response } from "express";
import updateUser from "../service/updateUser.service";
import { ErrorHandler } from "../utils/error.util";

const updateUserController = async (req: Request, res: Response) => {
  try{
    console.log("help")
    const {password, ...updatedUser} = await updateUser(req);
    return res.status(200).json(updatedUser);
  } catch (error) {
    throw new ErrorHandler(400, error)
  }
}

export default updateUserController;
