// userController.test.js

const { app, server } = require('../server');
const supertest = require('supertest');
const { register, createToken } = require('../controllers/userController.js');
const users = require('../models/userModel');
const bcrypt = require('bcrypt');

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

// describe('register', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should return 400 if any field is missing', async () => {
//     const { req, res } = mockReqRes();
//     req.body = { username: '', email: '', password: '' };

//     await register(req, res);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Please enter all fields' });
//   });

//   it('should return 400 if username already exists', async () => {
//     const { req, res } = mockReqRes();
//     req.body = { username: 'existingUser', email: 'test@example.com', password: 'password' };

//     users.findOne.mockResolvedValue({ username: 'existingUser' });

//     await register(req, res);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Username already exists' });
//   });

//   it('should create a new user and return 201 with a token', async () => {
//     const { req, res } = mockReqRes();
//     req.body = { username: 'newUser', email: 'test@example.com', password: 'password' };

//     users.findOne.mockResolvedValue(null); // No existing user
//     bcrypt.hash.mockResolvedValue('hashedPassword');
//     users.create.mockResolvedValue({ _id: 'userId', username: 'newUser', email: 'test@example.com' });
//     createToken.mockReturnValue('mockedToken');

//     await register(req, res);

//     expect(users.findOne).toHaveBeenCalledWith({ username: 'newUser' });
//     expect(bcrypt.hash).toHaveBeenCalledWith('password', 10);
//     expect(users.create).toHaveBeenCalledWith({ username: 'newUser', email: 'test@example.com', password: 'hashedPassword' });
//     expect(createToken).toHaveBeenCalledWith('userId');
//     expect(res.status).toHaveBeenCalledWith(201);
//     expect(res.json).toHaveBeenCalledWith({ message: 'User created successfully', token: 'mockedToken' });
//   });

//   it('should return 500 if there is an error during registration', async () => {
//     const { req, res } = mockReqRes();
//     req.body = { username: 'newUser', email: 'test@example.com', password: 'password' };

//     users.findOne.mockRejectedValue(new Error('DB Error'));

//     await register(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'An error occurred during registration', error: expect.any(Error) });
//   });
// });

afterAll((done) => {
  server.close(done); // Close the server properly
});

// Helper function to mock request and response objects
// function mockReqRes() {
//   const req = { body: {} };
//   const res = {
//     status: jest.fn().mockReturnThis(),
//     json: jest.fn(),
//   };
//   return { req, res };
// }