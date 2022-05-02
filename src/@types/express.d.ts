import * as express from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { IDecoded } from '../middleware/validateAdmin.middleware';
import { IUser } from '../repositories';

declare global {
  namespace Express {
    interface Request {
      validated: IUser
      uuid: string
      token: string
    }
  }
}