
const { connectDB, isConnected,disconnectDB } = require('./db.js')




beforeAll(async () => {
  await connectDB();  
});

afterAll(async () => {
  await disconnectDB();  
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
  expect(isConnected()).toBe(true);  // Check if the connection is successful
});
