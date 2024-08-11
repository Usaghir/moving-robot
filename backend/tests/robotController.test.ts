import { moveRobot } from '../src/services/robotService';

// Test the moveRobot function
describe('moveRobot', () => {
  // Test the moveRobot function
  it('should move the robot correctly with in the boundry', () => {
    const finalPosition = moveRobot([5, 5], [1, 2, 'N'], 'RFRFFRFRF');
    expect(finalPosition).toEqual([1, 1, 'N']);
  });

  // Test the moveRobot function
  it('should throw an error if the robot moves out of the boundry', () => {
    expect(() => moveRobot([5, 5], [0, 0, 'E'], 'RFLFFLRF')).toThrow(
      'ERROR: Out of bounds at 0 -1',
    );
  });
});
