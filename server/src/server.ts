import App from './app';
import AuthController from './authentication/auth.controller';

const app = new App([
  new AuthController()
]);

app.listen();