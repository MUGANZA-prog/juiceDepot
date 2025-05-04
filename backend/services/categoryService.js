const db = require('../config/db');

const createCategory = (category, callback) => {
    const sql = 'INSERT INTO category (categoryName) VALUES (?)';
    db.query(sql, [category.categoryName], callback);
}

const getCategory = (callback) => {
    db.query('SELECT * FROM category', callback);
}

module.exports = { createCategory, getCategory };