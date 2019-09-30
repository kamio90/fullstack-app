import Http from './http.exception';

class WrongAuthToken extends Http {
  constructor() {
    super(401, 'Wrong auth token');
  }
}

export default WrongAuthToken;