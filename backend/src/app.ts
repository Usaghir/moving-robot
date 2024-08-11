import express from 'express';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import robotRoutes from './routes/robotRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log requests
app.use(loggerMiddleware);

// Route for the robots API
app.use('/api', robotRoutes);

// Middleware to handle errors
app.use(errorHandler);

export default app;
