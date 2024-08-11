// Description: This file contains the utility functions for the robot.
const turnLeft = (direction: string): string => {
  switch (direction) {
    case 'N':
      return 'W';
    case 'E':
      return 'N';
    case 'S':
      return 'E';
    case 'W':
      return 'S';
    default:
      return direction;
  }
};

// Implement the logic to turn the robot right
const turnRight = (direction: string): string => {
  switch (direction) {
    case 'N':
      return 'E';
    case 'E':
      return 'S';
    case 'S':
      return 'W';
    case 'W':
      return 'N';
    default:
      return direction;
  }
};

// Implement the logic to move the robot forward
const moveForward = (
  xPoistion: number,
  yPosition: number,
  direction: string,
): [number, number] => {
  switch (direction) {
    case 'N':
      return [xPoistion, yPosition + 1];
    case 'E':
      return [xPoistion + 1, yPosition];
    case 'S':
      return [xPoistion, yPosition - 1];
    case 'W':
      return [xPoistion - 1, yPosition];
    default:
      return [xPoistion, yPosition];
  }
};

// Implement the logic to calculate the new position of the robot
export const updatePose = (
  [xPoistion, yPosition]: [number, number],
  direction: string,
  instruction: string,
  [xMax, yMax]: [number, number],
): { position: [number, number]; direction: string } => {
  // Implement the logic to calculate the new position of the robot

  let newXPoistion = xPoistion;
  let newYPosition = yPosition;
  let newDirection = direction;

  // Update the direction or position based on the instruction
  switch (instruction) {
    case 'L':
      newDirection = turnLeft(direction);
      break;
    case 'R':
      newDirection = turnRight(direction);
      break;
    case 'F':
      [newXPoistion, newYPosition] = moveForward(
        xPoistion,
        yPosition,
        direction,
      );
      break;
    default:
      break;
  }

  // Check if the new position is within bounds
  if (
    newXPoistion >= xMax ||
    newXPoistion < 0 ||
    newYPosition >= yMax ||
    newYPosition < 0
  ) {
    throw new Error(`ERROR: Out of bounds at ${newXPoistion} ${newYPosition}`);
  }

  return { position: [newXPoistion, newYPosition], direction: newDirection };
};
