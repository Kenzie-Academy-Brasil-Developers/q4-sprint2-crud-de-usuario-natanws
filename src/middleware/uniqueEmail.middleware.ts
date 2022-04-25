import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories";
import { ErrorHandler } from "../utils/error.util";

const uniqueEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const user = await new UserRepository().findByEmail(email)

  if (user) {
    throw new ErrorHandler(500, "Email already registered")
  }

  return next()
}

export default uniqueEmail;