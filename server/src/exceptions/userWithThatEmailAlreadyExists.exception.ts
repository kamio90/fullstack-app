import Http from './http.exception';

class UserWithThatEmailAlreadyExist extends Http {
  constructor(email: string) {
    super(400, `User with email: ${email} already exist`);
  } 
}

export default UserWithThatEmailAlreadyExist;