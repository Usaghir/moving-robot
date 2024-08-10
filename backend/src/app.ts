import express, { Request, Response } from 'express';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import testRoute from './routes/testRoute';

const app = express();
app.use(loggerMiddleware);
app.use('/test', testRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
