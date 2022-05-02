import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import jwtConfig from "../configs";
import { ErrorHandler } from "../utils/error.util";
import { IDecoded } from "./validateAdmin.middleware";

const validateUserIdAndPermission = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params.uuid !== req.uuid) {
      verify(req.token, jwtConfig.secretKey, (error, decoded) => {
        if (error) {
          throw new ErrorHandler(401, "Missing admin permissions")
        }
        if (!(decoded as IDecoded).user.isAdm) {
          throw new ErrorHandler(401, "Missing admin permissions")
        }
      })
    }
    return next()
  } catch (error) {
    return next(error)
  }  
}

export default validateUserIdAndPermission;
