import { Response } from 'express';
import { sendJSONResponse } from '../src/utils/testResponseUtil';

describe('sendJSONResponse', () => {
  let res: Partial<Response>;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should set a response status and send the JSON response', () => {
    const status = 200;
    const data = { message: 'Hello test!' };
    sendJSONResponse(res as Response, status, data);

    expect(res.status).toHaveBeenCalledWith(status);
    expect(res.json).toHaveBeenCalledWith(data);
  });
});
