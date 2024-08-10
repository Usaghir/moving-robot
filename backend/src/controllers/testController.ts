import { Request, Response } from 'express';
import { testService } from '../services/testService';
import { sendJSONResponse } from '../utils/testResponseUtil';

export const testController = (req: Request, res: Response): void => {
  const name: string = req.query.name as string;
  const response: string = testService(name);
  sendJSONResponse(res, 200, { message: response });
};
