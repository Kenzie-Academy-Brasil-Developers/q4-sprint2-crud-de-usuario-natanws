import { Request, Response } from "express";
import deleteUser from "../service/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUser(req)
  res.status(200).json({ message: "User deleted with success" })
}

export default deleteUserController;
