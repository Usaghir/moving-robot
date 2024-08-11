import { updatePose } from '../utils/robotUtils';

// Define the maximum room size
const MAX_ROOM_SIZE = 100;

let roomSize: [number, number] = [10, 10];
let robotPosition: [number, number] = [0, 0];
let robotDirection: string = 'N';

// Implement the logic to get the default pose
export const getDefaultPose = () => {
  roomSize = [10, 10];
  robotPosition = [0, 0];
  robotDirection = 'N';

  return {
    roomSize,
    robotPosition,
    robotDirection,
  };
};

// Implement the logic to set the custom pose
export const setCustomPose = (
  customSize: [number, number],
  customPosition: [number, number],
  customDirection: string,
) => {
  // validate room size
  if (
    !Array.isArray(customSize) ||
    customSize.length !== 2 ||
    typeof customSize[0] !== 'number' ||
    typeof customSize[1] !== 'number' ||
    customSize[0] <= 0 ||
    customSize[1] <= 0 ||
    customSize[0] > MAX_ROOM_SIZE ||
    customSize[1] > MAX_ROOM_SIZE
  ) {
    throw new Error(
      `Invalid room size: [${customSize[0]}, ${customSize[1]}]. Room size must be an array of two positive numbers and should not exceed [${MAX_ROOM_SIZE}, ${MAX_ROOM_SIZE}].`,
    );
  }

  // validate the custom position
  if (
    customPosition[0] >= customSize[0] ||
    customPosition[0] < 0 ||
    customPosition[1] >= customSize[1] ||
    customPosition[1] < 0
  ) {
    throw new Error(
      `Invalid position: [${customPosition[0]}, ${customPosition[1]}] is out of bounds for the room size [${customSize[0]}, ${customSize[1]}].`,
    );
  }

  // validate the custom direction
  const validDirections = ['N', 'E', 'S', 'W'];
  if (!validDirections.includes(customDirection)) {
    throw new Error(
      `Invalid direction: ${customDirection}. Valid directions are 'N', 'E', 'S', 'W'.`,
    );
  }
  roomSize = customSize;
  robotPosition = customPosition;
  robotDirection = customDirection;
  return { roomSize, robotPosition, robotDirection };
};

// Implement the logic to calculate the new position of the robot
export const moveRobot = (instructions: string) => {
  const validInstructions = ['L', 'R', 'F'];
  if (!validInstructions.includes(instructions)) {
    throw new Error(
      `Invalid instruction: ${instructions}. Valid instructions are 'L', 'R', 'F'. `,
    );
  }
  try {
    // Update the robot's position and direction
    const newPose = updatePose(
      robotPosition,
      robotDirection,
      instructions,
      roomSize,
    );
    robotPosition = newPose.position;
    robotDirection = newPose.direction;
    return { robotPosition, robotDirection };
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('ERROR:')) {
      throw error; // Rethrow without modification if it already has the prefix
    } else if (error instanceof Error) {
      throw new Error(`ERROR: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
