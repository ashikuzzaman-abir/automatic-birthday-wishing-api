import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();
const app = 'http://localhost:5000/';

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('api/');
    expect(response.statusCode).toBe(200);
  });
});
