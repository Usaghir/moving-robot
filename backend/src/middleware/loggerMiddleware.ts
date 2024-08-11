import { Request, Response, NextFunction } from 'express';

// Middleware to log requests
export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  console.log(`Request URL: ${req.originalUrl}`);
  next();
};
