import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
//
import userModel from '../models/user.model';
import UserDto from '../dto/user.dto';
import UserWithThatEmailAlreadyExists from '../exceptions/userWithThatEmailAlreadyExists.exception';
import TokenData from 'interfaces/tokenData.interface';
import DataStoredInToken from 'interfaces/dataStoredInToken.interface';
import User from '../interfaces/user.interface';



class AuthService {
  public user = userModel;

  public async register(userData: UserDto) {
    if 
    (
      await this.user.findOne({
        email: userData.email
      })
    ) {
      throw new UserWithThatEmailAlreadyExists(userData.email);
    }
    const timesSalt = 10; //TODO add env variables
    const hashedPassword = await bcrypt.hash(userData.password, timesSalt);
    const user = await this.user.create({
      ...userData,
      password: hashedPassword
    });
    user.password = undefined;
    const tokenData = this.createToken(user);
    const cookie = this.createCookie(tokenData);
    return {
      cookie,
      user
    }
  }

  public createCookie(tokenData: TokenData) {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
  }

  public createToken(user: User):TokenData {
    const expiresIn = 60 * 60;
    const secret = "alabama"; //TODO add env variables
    const dataStoredInToken: DataStoredInToken = {
      _id: user._id
    };
    return{
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, {expiresIn})
    }
  }

}

export default AuthService;
