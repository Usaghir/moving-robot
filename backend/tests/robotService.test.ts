import {
  getDefaultPose,
  moveRobot,
  setCustomPose,
} from '../src/services/robotService';

// Test cases for robotService functions
describe('robotService', () => {
  beforeEach(() => {
    getDefaultPose();
  });

  // Test case for getDefaultPose function
  it('should return default pose', () => {
    const result = getDefaultPose();
    expect(result.roomSize).toEqual([10, 10]);
    expect(result.robotPosition).toEqual([0, 0]);
    expect(result.robotDirection).toBe('N');
  });

  // Test case for setCustomPose function
  it('should set custom pose correctly', () => {
    const result = setCustomPose([5, 5], [2, 2], 'E');
    expect(result.roomSize).toEqual([5, 5]);
    expect(result.robotPosition).toEqual([2, 2]);
    expect(result.robotDirection).toBe('E');
  });
  it('should throw an error if the room size is invalid', () => {
    expect(() => setCustomPose([150, 5], [2, 2], 'E')).toThrow(
      'Invalid room size: [150, 5]. Room size must be an array of two positive numbers and should not exceed [100, 100].',
    );
  });

  // Test case for setCustomPose function
  it('should throw and error if the robot position is not valid', () => {
    expect(() => setCustomPose([10, 10], [11, 5], 'E')).toThrow(
      'Invalid position: [11, 5] is out of bounds for the room size [10, 10].',
    );
  });

  // Test case for setCustomPose function
  it('should throw an error if the direction is invalid', () => {
    expect(() => setCustomPose([10, 10], [5, 5], 'X')).toThrow(
      `Invalid direction: X. Valid directions are 'N', 'E', 'S', 'W'.`,
    );
  });

  // Test case for moveRobot function
  it('should move forward correctly within bounds', () => {
    setCustomPose([10, 10], [5, 5], 'N');
    const result = moveRobot('F');
    expect(result.robotPosition).toEqual([5, 6]);
    expect(result.robotDirection).toBe('N');
  });

  // Test case for moveRobot function
  it('should throw an errr for invalid move command', () => {
    expect(() => moveRobot('X')).toThrow(
      "Invalid instruction: X. Valid instructions are 'L', 'R', 'F'.",
    );
  });
});
