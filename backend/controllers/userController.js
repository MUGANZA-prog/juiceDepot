
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const { createUser, getUsers } = require('../services/userService');
const User = require('../models/user');

exports.register = (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  

  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User(first_name, last_name, email, hashedPassword);

  createUser(user, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'User registered successfully' });
  });
};

exports.getAllUsers = (req, res) => {
  getUsers((err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(result);
  });
};


exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // Step 1: Find user by email
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = results[0];

    // Step 2: Compare passwords using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Success
    res.status(200).json({ message: "Login successful", user });
  });
};




