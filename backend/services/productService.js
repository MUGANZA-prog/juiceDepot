const db = require('../config/db');

const createProduct = (product, callback) => {
    const sql = 'INSERT INTO products (productImage, productName, productCategory, productQuantity, productPrice, productDate) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [product.productImage, product.productName, product.productCategory, product.productQuantity, product.productPrice, product.productDate], callback);
  }

  const getProduct = (callback) => {
    db.query('SELECT * FROM products', callback)
  }

module.exports = { createProduct, getProduct };
