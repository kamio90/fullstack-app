import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
//
import Controller from '../interfaces/controller.interface';
import AuthService from './auth.service';
import userModel from '../models/user.model';
import LoginDto from '../dto/login.dto';
import validationMiddleware from '../middleware/validation.middleware';
import UserDto from '../dto/user.dto';
import WrongCredentials from '../exceptions/wrongCredentials.exception';

class AuthController implements Controller {
  public path = '/auth';
  public router = express.Router();
  public authService = new AuthService();
  public user = userModel;

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post(`${this.path}/register`, validationMiddleware(UserDto, true), this.registration);
    this.router.post(`${this.path}/login`, validationMiddleware(LoginDto), this.logIn);
    this.router.post(`${this.path}/logout`, this.logOut);
  }

  private registration = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const userData: LoginDto = req.body;
    try {
      const {
        cookie,
        user
      } = await this.authService.register(userData);
      res.setHeader('Set-Cookie', [cookie]);
      res.send(user);
    } catch (err) {
      next(err);
    }
  }

  private logIn = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const logIndata: LoginDto = req.body;
    const user = await this.user.findOne({email: logIndata.email});
    if ( user ) {
      const isPasswordMatch = await bcrypt.compare(logIndata.password, user.password); //TODO better way to hash and compare password
      if ( isPasswordMatch ) {
        user.password = undefined;
        const tokenData = this.authService.createToken(user);
        res.setHeader('Set-Cookie', [this.authService.createCookie(tokenData)]);
        res.send(user);
      } else {
        next(new WrongCredentials());
      }
    }  else {
      next(new WrongCredentials());
    }
  }

  private logOut = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader('Set-Cookie', ['Authorization=;Max-age=0']);
    res.send(200);
  }


}

export default AuthController;