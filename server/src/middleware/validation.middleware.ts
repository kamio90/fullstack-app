import { plainToClass } from 'class-transformer'; 
import {validate, ValidationError} from 'class-validator';
import * as express from 'express';
//
import Http from '../exceptions/http.exception';

function validationMiddleware<T>(type: any, skipMissingProperties = false): express.RequestHandler {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    validate(plainToClass(type, req.body), { skipMissingProperties })
    .then((errors: ValidationError[]) => {
      if ( errors.length > 0 ) {
        const message = errors.map((error: ValidationError) => {
          Object.values(error.constraints)
        }).join(', ');
      } else {
        next();
      }
    });
  }
}

export default validationMiddleware;
