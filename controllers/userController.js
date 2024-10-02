const users = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");



const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
async function Login(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(401).json({ message: "Please enter both username and password" });
    }

    
    res.status(200).json({ userId: 0 });
  } catch (err) {
    console.error("Error during login:", err); 
    res.status(500).json({ message: "An error occurred during login", error: err.message }); 
}
}

async function register(req,res){
  try{
    const {username, password, email} = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({ message: "Please enter all fields" });
      }
      const exists = await users.findOne({ username });
      if (exists) {
        return res.status(400).json({ message: "Username already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await users.create({ username, email, password: hashedPassword });
        const token = createToken(user._id)
        res.status(201).json({ message: "User created successfully",token });
        } catch (err) {
          console.error("Error during registration:", err);
          res.status(500).json({ message: "An error occurred during registration", error: err})
        }

}



module.exports = {
  Login,
  createToken,
  register
}

