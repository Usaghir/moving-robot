import { updatePose } from '../src/utils/robotUtils';

// Test cases for updatePose function
describe('updatePose', () => {
  // Test case for turning left
  it('should turn left correctly', () => {
    const result = updatePose([0, 0], 'N', 'L', [10, 10]);
    expect(result.direction).toBe('W');
  });

  // Test case for turning right
  it('should turn right correctly', () => {
    const result = updatePose([0, 0], 'N', 'R', [10, 10]);
    expect(result.direction).toBe('E');
  });

  // Test case for moving forward
  it('should move forward correctly in the current direction', () => {
    const result = updatePose([0, 0], 'N', 'F', [10, 10]);
    expect(result.position).toEqual([0, 1]);
  });

  // Test case for moving out of bound
  it('should throw an error if moving out of bound', () => {
    expect(() => updatePose([9, 9], 'N', 'F', [10, 10])).toThrow(
      'ERROR: Out of bounds at 9 10',
    );
  });
});
