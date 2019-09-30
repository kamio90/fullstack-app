import Http from './http.exception';

class AuthTokenMissing extends Http {
  constructor() {
    super(401, "Auth token is missing");
  }
}

export default AuthTokenMissing;