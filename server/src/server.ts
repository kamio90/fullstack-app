import App from './app';
import AuthController from './authentication/auth.controller';
import PostController from './post/post.controller';

const app = new App([
  new AuthController(),
  new PostController()
]);

app.listen();