const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
})

const products =  mongoose.models.product || mongoose.model("product", productSchema);

module.exports = products;