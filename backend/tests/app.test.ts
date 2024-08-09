import { Request, Response } from 'express';
import app from '../src/app';

describe('GET /', () => {
  it('should return hello world', () => {
    const req = {} as Request;
    const res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;

    const routes = app._router.stack.filter(
      (r: { route: { path: string } }) => r.route && r.route.path === '/',
    );

    routes.map(
      (r: {
        route: {
          // eslint-disable-next-line no-unused-vars
          stack: Array<{ handle: (req: Request, res: Response) => void }>;
        };
      }) => r.route.stack[0].handle(req, res),
    );

    expect(res.send).toHaveBeenCalledWith('Hello World');
  });
});
