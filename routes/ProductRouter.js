const express = require("express");
const { getProductHandler, insertProduct} = require("../controllers/productController");


const ProductRouter = express.Router();


ProductRouter.get("/:productId", getProductHandler)
ProductRouter.post("/insert", insertProduct)


module.exports = ProductRouter;