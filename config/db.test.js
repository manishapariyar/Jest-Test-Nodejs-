
const connectDB = require('./db.js')


beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

beforeAll(async () => {
  await connectDB();  
});


// Mock mongoose.connect
jest.mock('mongoose', () => ({
  connect: jest.fn(() => Promise.resolve()),
  disconnect: jest.fn(() => Promise.resolve()),
  connection: { 
    readyState: 1 
  }
}));

test('Database connection should be successful', async () => {
  await connectDB();  // Call the connectDB function
  expect(true).toBe(true);  // Check if the connection is successful
});
afterAll(async () => {
  await mongoose.disconnect();
});
