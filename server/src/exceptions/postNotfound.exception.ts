import Http from './http.exception';

class PostNotFound extends Http {
  constructor(id: string) {
    super(404, `Adv with id: ${id} not found`);
  }
}

export default PostNotFound;
