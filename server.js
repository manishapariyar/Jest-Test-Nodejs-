const express = require('express');
const  connectDB  = require('./config/db.js');
const UserRouter = require('./routes/UserRouter.js');
const ProductRouter = require('./routes/ProductRouter.js');

const app = express(); 
const PORT = process.env.PORT || 8080;

connectDB(); 

app.use(express.json()); 

// Define routes
app.use("/api/users", UserRouter);
app.use("/api/product", ProductRouter);

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app, server };
