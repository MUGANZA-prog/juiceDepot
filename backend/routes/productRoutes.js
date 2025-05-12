const express = require('express');
const router = express.Router();
const { registerProduct, getAllProducts, sellProduct } = require('../controllers/productController');


router.post('/addProduct', registerProduct);
router.get('/displayProduct', getAllProducts)
router.post('/selectProduct', sellProduct)

module.exports = router;