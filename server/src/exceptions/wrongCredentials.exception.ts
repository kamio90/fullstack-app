import Http from "./http.exception";

class WrongCredentials extends Http {
  constructor() {
    super(401, 'Invalid credentials provided');
  }
}

export default WrongCredentials;