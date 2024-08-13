import { Request, Response, NextFunction } from 'express';

// Middleware to log requests
export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  `Request URL: ${req.originalUrl}`;
  next();
};
