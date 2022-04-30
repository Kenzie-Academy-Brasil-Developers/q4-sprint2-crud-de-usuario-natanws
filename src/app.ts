import express, { NextFunction, Request, Response } from 'express';
import router from './routes';
import { handleError } from './utils/error.util';

const app = express();

app.use(express.json());
app.use('', router);
app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  return handleError(err, res);
});

export default app;
