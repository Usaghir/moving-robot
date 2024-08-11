import { Router } from 'express';
import {
  getDefaultPoseController,
  moveRobotController,
  setCustomPoseController,
} from '../controllers/robotController';

// Router for the robots API
const router = Router();

// Route for the robot move API
router.get('/robot/default', getDefaultPoseController);
router.post('/robot/custom', setCustomPoseController);
router.post('/robot/move', moveRobotController);

export default router;
