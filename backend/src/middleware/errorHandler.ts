import { Request, Response } from 'express';

// Middleware to handle errors
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
): void => {
  console.error(error.stack);
  if (error instanceof Error) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(400).json({ error: 'An unknown error occurred' });
  }
};
