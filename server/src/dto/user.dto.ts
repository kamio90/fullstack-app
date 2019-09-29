import { IsString } from 'class-validator';

class UserDto {
  @IsString()
  public email: string;

  @IsString()
  public password: string;
}

export default UserDto;