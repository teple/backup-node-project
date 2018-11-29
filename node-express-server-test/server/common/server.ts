import express from 'express';
import { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import swaggerify from './swagger';
import l from './logger';
import { sequelize } from '../sequelize';

const app = express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
  }

  router(routes: (app: Application) => void): ExpressServer {
    swaggerify(app, routes)
    return this;
  }

  async listen(port: number = parseInt(process.env.PORT)): Promise<Application> {
    try {
      // console.log(process.env.NODE_ENV);
      
      // DB接続
      await sequelize.sync({force: true});
  
      const welcome = port => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${port}}`);
      http.createServer(app).listen(port, welcome(port));
      return app;

    } catch (error) {
      console.error(error);
      l.error(error);
      process.exit();

    }
  }
}