import * as express from 'express';

class App {
  public app: express.Application;
  
  constructor() {
    this.app = express();
  }

  public listen():void {
    this.app.listen(process.env.PORT || 3000, () => {
      console.log(`App is listen on port: 3000`); //TODO change to doenv variables
    });
  }

  public getServer():express.Application{
    return this.app;
  }
}

export default App;