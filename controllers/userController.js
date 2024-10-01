


async function Login (req,res) {
    const {username,password} = req.body;
    if(!username|| !password){
      return res.status(401).json({message:"Please enter both username and password"})
    }
    res.status(200).json({userId:0});
    return;
  }
   
  module.exports = {
    Login
  }