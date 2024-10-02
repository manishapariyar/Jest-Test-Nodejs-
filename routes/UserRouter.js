const express = require("express");
const { Login, register } = require("../controllers/userController");


const UserRouter = express.Router();


UserRouter.post("/login", Login)
UserRouter.post("/register", register)

module.exports = UserRouter;