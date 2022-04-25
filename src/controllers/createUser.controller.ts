import { Request, Response } from "express";
import { IUser } from "../repositories/user/interfaces";
import { UserRepository } from "../repositories/user/user.repository";

const createUserController = async (req: Request, res: Response) => {
  const user: IUser = await new UserRepository().saveUser(req.validated as IUser)

  return res.status(201).json(user)
}

export default createUserController;
