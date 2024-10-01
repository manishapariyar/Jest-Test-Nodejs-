const supertest = require("supertest");
const app = require("../server");
const products = require('../models/productModel');
const connectDB = require("../config/db.js")

beforeEach(async () => {
  await connectDB();
});


jest.mock('../models/productModel');

describe("Product API", () => {
    describe('GET /api/product/:id', () => {
        describe('when the product does not exist', () => {
            it('should return 404', async () => {
                const productId = "product123";
                await supertest(app).get(`/api/product/${productId}`);
                expect(404);
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

                products.mockImplementation(() => ({
                    save: jest.fn().mockResolvedValue(product)
                }));

                await supertest(app)
                    .post("/api/product/insert")
                    .send(product)
                    .expect(201);
              
            });
        });
    });
});
