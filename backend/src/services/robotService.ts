import { calculateNewPosition } from '../utils/robotUtils';

// Implement the logic to calculate the new position of the robot
export const moveRobot = (
  dimensions: [number, number],
  initialPosition: [number, number, string],
  instructions: string,
): [number, number, string] => {
  let position = initialPosition;

  for (const instruction of instructions) {
    position = calculateNewPosition(position, instruction, dimensions);
  }
  return position;
};
