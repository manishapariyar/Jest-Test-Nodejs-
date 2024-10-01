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
module.exports = {
  Login,
}
