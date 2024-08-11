import { Request, Response } from 'express';
import { moveRobot } from '../services/robotService';

// Controller to move the robot
export const robotController = (req: Request, res: Response): void => {
  try {
    const { dimensions, initialPosition, instructions } = req.body;
    const finalPosition = moveRobot(dimensions, initialPosition, instructions);
    res.status(200).json({ position: finalPosition });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};
