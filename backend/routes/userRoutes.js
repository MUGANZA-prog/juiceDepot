const express = require('express');
const router = express.Router();
const { register, getAllUsers, loginUser } = require('../controllers/userController');

router.post('/signup', register);
router.get('/users', getAllUsers);
router.post('/login', loginUser);


module.exports = router;
