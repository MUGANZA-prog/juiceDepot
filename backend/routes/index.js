const express = require('express');
const router = express.Router();

router.use('/api', require('./userRoutes'));
router.use('/api/products', require('./productRoutes'));
router.use('/api/categories', require('./categoryRoutes'));


module.exports = router;
