const { createProduct, getProduct, selectProducts } = require('../services/productService');
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


const productService = require('../services/productService');

const sellProduct = (req, res) => {
  const { productId, quantity } = req.body;

  productService.sellProduct(productId, quantity, (err, result) => {
    if (err) {
      console.error('Sell Error:', err.message);
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json(result);
  });
};



 

module.exports = { registerProduct, getAllProducts, sellProduct };
