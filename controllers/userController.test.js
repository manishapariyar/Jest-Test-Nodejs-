const { app, server } = require('../server');
const supertest = require('supertest');

describe('POST /api/users', () => {
  describe('given username and password', () => {
    test('should respond with a 200 status code', async () => {
      const response = await supertest(app)
        .post('/api/users/login')
        .send({
          username: 'username',
          password: 'password',
        });
      expect(response.status).toBe(200);
    });
  });

  test('check whether the header type is JSON', async () => {
    const response = await supertest(app).post('/api/users/login').send({
      username: 'username',
      password: 'password',
    });
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });
});

// Ensure the server closes after the test suite is done
afterAll((done) => {
  server.close(done); // Close the server properly
});
