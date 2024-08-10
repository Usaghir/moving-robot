import { testService } from '../src/services/testService';

describe('testService', () => {
  it('should return a greeting message with provided name', () => {
    const name = 'test';
    const result = testService(name);
    expect(result).toBe(`Hello ${name}!`);
  });

  it('should return a greeting message when no name is provided', () => {
    const result = testService();
    expect(result).toBe('Hello test!');
  });
});
