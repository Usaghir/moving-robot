import { Request, Response } from 'express';

// Middleware to handle errors
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
): void => {
  if (error instanceof Error) {
    console.error('Error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
  res.status(400).json({
    error: error instanceof Error ? error.message : 'Unknown error occurred',
  });
};
