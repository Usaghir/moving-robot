import { Request, Response } from 'express';
import { testController } from '../src/controllers/testController';
import { testService } from '../src/services/testService';

jest.mock('../src/services/testService');

describe('testController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = { query: {} };
    res = {
      status: jest.fn().mockReturnThis(), // Mock the status method
      json: jest.fn(),
    };
  });

  it('should call testService with correct name and return response', () => {
    req.query!.name = 'test';
    const mockServiceResult = 'Hello test!';
    (testService as jest.Mock).mockReturnValue(mockServiceResult);
    testController(req as Request, res as Response);

    expect(testService).toHaveBeenCalledWith('test');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: mockServiceResult });
  });

  it('should return a default greeting if no name is provided', () => {
    const mockServiceResult = 'Hello test!';
    (testService as jest.Mock).mockReturnValue(mockServiceResult);
    testController(req as Request, res as Response);

    expect(testService).toHaveBeenCalledWith(undefined);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: mockServiceResult });
  });
});
