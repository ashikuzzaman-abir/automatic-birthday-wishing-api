import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();
const app = 'http://localhost:5000';

describe('Testing the endpoints', () => {
  test('Get Customers', async () => {
    const response = await request(app).get('/customer/');
    expect(response.statusCode).toBe(200);
  });

  test('Create a Customer', async () => {
    const response = await request(app).post('/customer/register').send({
      name: 'Test User',
      email: 'test@gmail.com',
      password: '12345678',
      dateOfBirth: '1992-5-4',
    });
    expect(response.statusCode).toBe(200);
    const deleteResponse = await request(app).delete(
      `/customer/${response.body.userId}`
    );
    expect(deleteResponse.statusCode).toBe(200);
  });
});
