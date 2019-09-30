import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
//
import AuthTokenMissing from '../exceptions/authTokenMissing.exception';
import WrongAuthToken from '../exceptions/wrongAuthToken.exception';
import DataStoredInToken from '../interfaces/dataStoredInToken.interface';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import userModel from '../models/user.model';

async function auth(req: RequestWithUser, res: Response, next: NextFunction) {
  const cookies = req.cookies;
  if
  (
    cookies &&
    cookies.Authorization
  ) {
    const secret = "alabama"; //TODO env variables
    try {
      const verificationRes = jwt.verify(cookies.Authorizationm, secret) as DataStoredInToken;
      const id = verificationRes._id;
      const user = await userModel.findById(id);

      if (user) {
        req.user = user;
        next();
      } else {
        next(new WrongAuthToken());
      }
    } catch (err) {
      next(new WrongAuthToken());
    }
  } else {
    next(new AuthTokenMissing());
  }
}

export default auth;