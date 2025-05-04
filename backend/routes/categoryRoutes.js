const express = require('express');
const router = express.Router();
const {registerCategory, getAllCategories} = require('../controllers/categoryController');

router.post('/addCategory', registerCategory);
router.get('/getCategories', getAllCategories);

module.exports = router;
