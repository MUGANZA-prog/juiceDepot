const { createProduct, getProduct } = require('../services/productService');
const Product = require('../models/product');


const registerProduct = (req, res) => {
  const { productImage, productName, productCategory, productQuantity, productPrice, productDate } = req.body;

  const product = new Product(productImage, productName, productCategory, productQuantity, productPrice, productDate);

  createProduct(product, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database insert error" });
    }

    res.status(201).json({ message: "Product registered successfully" });
  });
};

const getAllProducts = (req, res) => {
    getProduct((err, result) => {
        if(err){
            console.error(err)
            return res.status(500).json({message: 'Database fetch error'});
        }
        else{
            return res.status(200).json(result);
        }
    })
}
 

module.exports = { registerProduct, getAllProducts };
