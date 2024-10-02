// userController.test.js

const { app, server } = require('../server');
const supertest = require('supertest');
const { register, createToken } = require('../controllers/userController.js');
const users = require('../models/userModel');
const bcrypt = require('bcrypt');




describe('UserController', () => {
  let timer;

  beforeEach(() => {
    timer = setTimeout(() => {
      // some code that needs to run after a delay
    }, 1000);
  });

  afterEach(() => {
    timer.unref(); // call unref to allow the timer to be garbage collected
  });

  
describe('POST /api/users', () => {
  describe('given username and password', () => {
    it('should respond with a 200 status code', async () => {
      const response = await supertest(app)
        .post('/api/users/login')
        .send({
          username: 'username',
          password: 'password',
        });
      expect(response.status).toBe(200);
    });
  });
});

describe('POST /api/users/login', () => {
  it('should respond with JSON content type', async () => {
    const response = await supertest(app).post('/api/users/login').send({
      username: 'username',
      password: 'password',
    });
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });
});


test('should validate email format', async () => {
  const response = await supertest(app).post('/api/users/register').send({
      username: 'username',
      email: 'com',
      password: 'password'
  });
  expect(response.statusCode).toBe(400);
  expect(response.body.message).toBe('Invalid email format');
});










});

afterAll((done) => {
  server.close(done); // Close the server properly
});

