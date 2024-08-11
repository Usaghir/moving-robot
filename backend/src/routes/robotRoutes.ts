import { Router } from 'express';
import { robotController } from '../controllers/robotController';

// Router for the robots API
const router = Router();

// Route for the robot move API
router.post('/robot/move', robotController);

export default router;
