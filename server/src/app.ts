import * as express from 'express';
import * as monoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
//
import Controller from './interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';

class App {
  public app: express.Application;
  
  constructor(controllers: Controller[]) {
    this.app = express();

    this.connectToDatabase();
    this.initMiddleware();
    this.initControllers(controllers);
    this.initErrorHandler();
  }

  public listen():void {
    this.app.listen(process.env.PORT || 5000, () => {
      console.log(`App is listen on port: 5000`); //TODO change to doenv variables
    });
  }

  public getServer():express.Application{
    return this.app;
  }

  private initErrorHandler(): void {
    this.app.use(errorMiddleware);
  }

  private initMiddleware():void {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }

  private initControllers(controllers: Controller[]):void {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }

  private connectToDatabase():void {
    //TODO change to doenv variables
    monoose.connect(
      'mongodb://localhost:27017/fullstackapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ).then(success => {
      console.log('Connect to local databast');
    }).catch(err => {
      console.log(`Database error: ${err}`);
    }); 
  }
}

export default App;