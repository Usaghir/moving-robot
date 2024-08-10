import { Request, Response, NextFunction } from 'express';
import { loggerMiddleware } from '../src/middleware/loggerMiddleware';

describe('loggerMiddleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = { originalUrl: '/test-url' };
    res = {};
    next = jest.fn();
    console.log = jest.fn();
  });

  it('should log request URL and call next()', () => {
    loggerMiddleware(req as Request, res as Response, next);

    expect(console.log).toHaveBeenCalledWith('Request URL: /test-url');
    expect(next).toHaveBeenCalled();
  });
});
