const supertest = require("supertest");
const { app, server } = require("../server"); // Import the app and server
const products = require('../models/productModel'); // Import the product model
const connectDB = require("../config/db.js"); // Import database connection function

let db; // Declare a variable to hold the database connection

beforeEach(async () => {
  db = await connectDB(); // Connect to the database before each test
});

afterEach(async () => {
  await server.close(); // Close the server after each test
  jest.resetAllMocks(); // Reset all mocks to ensure no state is carried over
});

afterAll(async () => {
  if (db && typeof db.close === 'function') {
    await db.close(); // Close the database connection after all tests
  }
});


jest.mock('../models/productModel');


describe("Product API", () => {
 
  describe('GET /api/product/:id', () => {
  
    describe('when the product does not exist', () => {
      it('should return 404', async () => {
        const productId = "product123";
        await supertest(app).get(`/api/product/${productId}`).expect(404); 
      });
    });
  });
});


describe("POST /api/product/insert", () => {
  describe("should insert a new product", () => {
    it('should return 201', async () => {
      const product = {
        "name": "orange",
        "price": 400,
        "description": 'Nepal best orange',
      };

      // Mock the implementation of the product model's save method
      products.mockImplementation(() => ({
        save: jest.fn().mockResolvedValue(product)
      }));

      await supertest(app)
        .post("/api/product/insert")
        .send(product) // Send the product data
        .expect(201); // Expect a 201 response for successful insertion
    });
  });
});
