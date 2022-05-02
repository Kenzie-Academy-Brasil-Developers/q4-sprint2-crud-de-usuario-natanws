import { compareSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import jwtConfig from "../configs";
import { User } from "../entities/User";
import { UserRepository } from "../repositories";
import { ErrorHandler } from "../utils/error.util";

const authenticateCredentials = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await new UserRepository().findByEmail((req.validated as User).email);

    if (!user) {
      throw new ErrorHandler(401, "Wrong email/password")
    }
    
    if (!compareSync((req.validated as User).password, user.password)) {
      throw new ErrorHandler(401, "Wrong email/password")
    }


    const expiresIn = jwtConfig.expiresIn || "24h";

    const token: string = sign({ user }, jwtConfig.secretKey, {
      expiresIn,
    });

    req.token = token;

    return next();
  } catch (error) {
    return next(error);
  }
};

export default authenticateCredentials;
