import {Request, Response, NextFunction} from 'express';
//
import Http from '../exceptions/http.exception';

function errorMiddleware(error: Http, req: Request, res: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  res.status(status).send({
    message, 
    status
  });
}

export default errorMiddleware;