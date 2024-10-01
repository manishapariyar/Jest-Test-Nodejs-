const products = require("../models/productModel.js")


async function  insertProduct (req,res){
  try{
    const {name,price,description} = req.body
    const product = new products({
      name:name,
      price:price,
      description:description
      })
      await product.save()
      res.status(201).json({message:"Product created successfully"})
    }
    catch(err){
      res.status(500).send(err)
    }
}



async function getProductHandler(req,res) {

  const { productId } = req.params;
  const product = products[productId];
  if(!product){
    return res.status(404).json({ message: "Product is not found" });
  }
  res.status(200).json( {message :"success"})
  
}

module.exports = {
  getProductHandler,
  insertProduct
}