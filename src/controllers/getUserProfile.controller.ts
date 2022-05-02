import { Request, Response } from "express";
import getUserWithoutHash from "../service/getUserWithoutHash.service";

const getUserProfileController = async (req: Request, res: Response) => {
  const user = await getUserWithoutHash(req)
  res.status(200).json(user)
}

export default getUserProfileController