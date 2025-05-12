const db = require('../config/db');

// Create a product
const createProduct = (product, callback) => {
  const sql = `
    INSERT INTO products 
    (productImage, productName, productCategory, productQuantity, productPrice, productDate) 
    VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, [
    product.productImage,
    product.productName,
    product.productCategory,
    product.productQuantity,
    product.productPrice,
    product.productDate
  ], callback);
};

// Get all available products
const getProduct = (callback) => {
  const sql = `
    SELECT * FROM products 
    WHERE productDate > NOW() AND productQuantity > 0`;

  db.query(sql, callback);
};

// Sell a product (reduce quantity and log to 'sold')
const sellProduct = (productName, quantityToSell, callback) => {
  if (!productName || !quantityToSell || isNaN(quantityToSell)) {
    return callback(new Error('Invalid product name or quantity'));
  }

  db.beginTransaction((err) => {
    if (err) return callback(err);

    const selectSQL = 'SELECT * FROM products WHERE id = ? FOR UPDATE';

    db.query(selectSQL, [productName], (err, results) => {
      if (err) return db.rollback(() => callback(err));

      if (results.length === 0) {
        return db.rollback(() => callback(new Error('Product not found')));
      }

      const product = results[0];

      if (product.productQuantity < quantityToSell) {
        return db.rollback(() => callback(new Error('Insufficient stock')));
      }

      const updateSQL = 'UPDATE products SET productQuantity = productQuantity - ? WHERE id = ?';

      db.query(updateSQL, [quantityToSell, product.id], (err) => {
        if (err) return db.rollback(() => callback(err));

        const insertSoldSQL = 'INSERT INTO sold (productName, productQuantity) VALUES (?, ?)';

        db.query(insertSoldSQL, [product.productName, quantityToSell], (err) => {
          if (err) return db.rollback(() => callback(err));

          db.commit((err) => {
            if (err) return db.rollback(() => callback(err));

            return callback(null, { message: 'Product sold successfully' });
          });
        });
      });
    });
  });
};

module.exports = {
  createProduct,
  getProduct,
  sellProduct
};
