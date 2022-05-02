import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import jwtConfig from "../configs";
import { User } from "../entities/User";
import { ErrorHandler } from "../utils/error.util";

export interface IDecoded {
  iat: number;
  exp: number;
  user: User;
}

const validateAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    verify(req.token, jwtConfig.secretKey, (error, decoded) => {
      if (error) {
        throw new ErrorHandler(401, error);
      }

      if (!(decoded as IDecoded).user.isAdm) {
        throw new ErrorHandler(401, "Missing admin permissions")
      }
      
      return next()
    })
  } catch (error) {
    return next(error)
  }
}

export default validateAdmin;
