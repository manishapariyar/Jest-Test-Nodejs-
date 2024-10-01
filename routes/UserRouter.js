const express = require("express");
const { Login } = require("../controllers/userController");


const UserRouter = express.Router();


UserRouter.post("/login", Login)

module.exports = UserRouter;