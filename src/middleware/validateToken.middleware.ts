import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import jwtConfig from "../configs";
import { ErrorHandler } from "../utils/error.util";
import { IDecoded } from "./validateAdmin.middleware";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    req.token = token

    if (!token) {
      throw new ErrorHandler(401, "Missing authorization headers token");
    }

    verify(token, jwtConfig.secretKey, (error, decoded) => {
      if (error) {
        throw new ErrorHandler(401, error);
      }
      req.uuid = (decoded as IDecoded).user.uuid
      return next()
    })
  } catch (error) {
    return next(error)
  }
}

export default validateToken;
