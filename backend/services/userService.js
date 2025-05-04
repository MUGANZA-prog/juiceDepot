const db = require('../config/db');

const createUser = (user, callback) => {
  const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [user.first_name, user.last_name, user.email, user.password], callback);
};

const getUsers = (callback) => {
  db.query('SELECT id, first_name, last_name, email FROM users', callback);
};



module.exports = { createUser, getUsers };
