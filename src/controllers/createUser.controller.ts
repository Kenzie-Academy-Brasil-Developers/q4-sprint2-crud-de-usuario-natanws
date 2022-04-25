import { Request, Response } from "express";
import { IUser } from "../repositories/user/interfaces";
import { UserRepository } from "../repositories/user/user.repository";

const createUserController = async (req: Request, res: Response) => {
  const user: IUser = await new UserRepository().saveUser(req.validated as IUser)

  const strippedHash = {
    uuid: user.uuid,
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
  }

  return res.status(201).json(strippedHash)
}

export default createUserController;
