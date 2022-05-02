import { Request, Response } from "express";
import getUsersWithouthHash from "../service/getUsersWithouthHash.service";

const getAllUsersController = async (req: Request, res: Response) => {
  const users = await getUsersWithouthHash();
  res.status(200).json(users);
}

export default getAllUsersController;
