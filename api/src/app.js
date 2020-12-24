import express from 'express';
import routes from './routes';
import path from 'path';
import './database';
import Youch from 'youch';
import * as Sentry from '@sentry/node';
import 'express-async-errors';
import sentryConfig from './config/sentry';
import 'dotenv/config';
import cors from 'cors';

class App {
    constructor() {
        this.server = express();
        Sentry.init(sentryConfig);
        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    middlewares() {
        this.server.use(Sentry.Handlers.requestHandler());
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
    }

    routes() {
        this.server.use(routes);
        this.server.use(Sentry.Handlers.errorHandler());
    }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const error = await new Youch(err, req).toJSON();
        return res.status(500).json({ error: 'Interval server error'});
      }
    });
  }
}

export default new App().server;
