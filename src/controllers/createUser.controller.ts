import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { User } from "../entities/User";
import { IUser } from "../repositories/user/interfaces";
import createUserService from "../service/createUser.service";
import { handleError } from "../utils/error.util";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.validated as User)
    
    return res.status(201).json(user)
  } catch (error) {
    return handleError(error, res)
  }
}

export default createUserController;
