const express = require('express');
const router = express.Router();
const { registerProduct, getAllProducts } = require('../controllers/productController');


router.post('/addProduct', registerProduct);
router.get('/displayProduct', getAllProducts)

module.exports = router;