import request from 'supertest';
import app from '../src/app';

// Integration tests for the robot API
describe('robot API', () => {
  it('should return the default pose', async () => {
    const response = await request(app).get('/api/robot/default');
    expect(response.status).toBe(200);
    expect(response.body.roomSize).toEqual([10, 10]);
    expect(response.body.robotPosition).toEqual([0, 0]);
    expect(response.body.robotDirection).toBe('N');
  });

  // Test for setting custom pose and getting it
  it('should set custom pose correctly and return it', async () => {
    const response = await request(app)
      .post('/api/robot/custom')
      .send({
        customSize: [10, 10],
        customPosition: [3, 3],
        customDirection: 'E',
      });
    expect(response.status).toBe(200);
    expect(response.body.customSize).toEqual([10, 10]);
    expect(response.body.customPosition).toEqual([3, 3]);
    expect(response.body.customDirection).toBe('E');
  });

  // Test to throw an error if the room size is invalid
  it('should throw an error if the room size is invalid', async () => {
    const response = await request(app)
      .post('/api/robot/custom')
      .send({
        customSize: [150, 5],
        customPosition: [2, 2],
        customDirection: 'E',
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(
      'Invalid room size: [150, 5]. Room size must be an array of two positive numbers and should not exceed [100, 100].',
    );
  });

  // Test for  throwing an error if the robot position is invalid
  it('should throw an error if the robot position is not valid', async () => {
    const response = await request(app)
      .post('/api/robot/custom')
      .send({
        customSize: [10, 10],
        customPosition: [11, 5],
        customDirection: 'E',
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(
      'Invalid position: [11, 5] is out of bounds for the room size [10, 10].',
    );
  });

  // Test for throwing an error if the direction is invalid
  it('should throw an error if the direction is invalid', async () => {
    const response = await request(app)
      .post('/api/robot/custom')
      .send({
        customSize: [10, 10],
        customPosition: [5, 5],
        customDirection: 'X',
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(
      `Invalid direction: X. Valid directions are 'N', 'E', 'S', 'W'.`,
    );
  });

  // Pending Tests
  /*
  it('should move forward correctly within bounds', async () => {
    await request(app)
      .post('/api/robot/custom')
      .send({
        customSize: [10, 10],
        customPosition: [5, 5],
        customDirection: 'N',
      });
    const response = await request(app).get('/api/robot/move?command=F');
    expect(response.status).toBe(200);
    expect(response.body.robotPosition).toEqual([5, 6]);
    expect(response.body.robotDirection).toBe('N');
  });
  
  it('should throw an error for out-of-bounds movement', async () => {
    await request(app)
      .post('/api/robot/custom')
      .send({
        customSize: [10, 10],
        customPosition: [9, 9],
        customDirection: 'N',
      });
    const response = await request(app).post('/api/robot/move?command=F');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('ERROR: Out of bounds at 9 10');
  });

  it('should throw an error for invalid move command', async () => {
    await request(app)
      .post('/api/robot/custom')
      .send({
        customSize: [10, 10],
        customPosition: [5, 5],
        customDirection: 'N',
      });
    const response = await request(app).get('/api/robot/move?command=X');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(
      "Invalid instruction: X. Valid instructions are 'L', 'R', 'F'.",
    );
  });
   */
});
