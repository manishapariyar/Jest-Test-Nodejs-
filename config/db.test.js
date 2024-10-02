const connectDB = require('./db');
const mongoose = require('mongoose');

// Mock mongoose.connect and other functions
jest.mock('mongoose', () => ({
  connect: jest.fn(),
  disconnect: jest.fn(() => Promise.resolve()),
  connection: { 
    readyState: 1 
  }
}));

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

beforeAll(async () => {
  await connectDB();  
});

afterAll(async () => {
  await mongoose.disconnect();
});

test('should connect to the database successfully', async () => {
  mongoose.connect.mockResolvedValueOnce({});
  await connectDB();  
  expect(mongoose.connect).toHaveBeenCalledWith(process.env.DB_URL);
  

  expect(console.log).toHaveBeenCalledWith('DB connected');
});

// test('should fail to connect to the database and log error', async () => {
//   const errorMessage = 'Database connection error';
//   mongoose.connect.mockRejectedValueOnce(new Error(errorMessage));

//   await expect(connectDB()).rejects.toThrow(errorMessage);
//   expect(console.error).toHaveBeenCalledWith('Database connection error:', errorMessage);
// });
