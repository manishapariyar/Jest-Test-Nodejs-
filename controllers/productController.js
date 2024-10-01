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

  try {
    const { productId } = req.params;
    
    const product = await products.findById(productId); 
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json({ message: "Success", product }); // 
  } catch (err) {
    console.error("Error fetching product:", err); 
    res.status(500).json({ message: "Failed to fetch product", error: err.message }); 
  }
  
}

module.exports = {
  getProductHandler,
  insertProduct
}