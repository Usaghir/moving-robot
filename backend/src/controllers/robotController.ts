import { Request, Response } from 'express';
import {
  moveRobot,
  getDefaultPose,
  setCustomPose,
} from '../services/robotService';

// Controllers for the robot routes  to get the default pose
export const getDefaultPoseController = (req: Request, res: Response): void => {
  const defaultPose = getDefaultPose();
  res.status(200).json(defaultPose);
};

// Controller to set custom pose
export const setCustomPoseController = (req: Request, res: Response): void => {
  try {
    const { customSize, customPosition, customDirection } = req.body;
    const customizedPose = setCustomPose(
      customSize,
      customPosition,
      customDirection,
    );
    res.status(200).json({
      customSize: customizedPose.roomSize,
      customPosition: customizedPose.robotPosition,
      customDirection: customizedPose.robotDirection,
    });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'unknown error',
    });
  }
};

// Controller to move the robot
export const moveRobotController = (req: Request, res: Response): void => {
  try {
    const instruction = req.query.command as string;
    if (!instruction) {
      res.status(400).json({ message: 'Instruction is required' });
      return;
    }
    const newPose = moveRobot(instruction);
    res.status(200).json(newPose);
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};
