import { Request, Response } from "express";

const loginUserController = (req: Request, res: Response) => {
  const { token } = req;
  res.status(200).json({ token });
}

export default loginUserController;
