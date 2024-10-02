const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  username: String,
  price: Number,
  email: String,
})

const users =  mongoose.models.user || mongoose.model("product", userSchema);

module.exports = users;