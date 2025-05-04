const {createCategory, getCategory} = require('../services/categoryService');
const Category = require('../models/category');


const registerCategory = (req, res) => {
    const {categoryName} = req.body;

    const category = new Category( categoryName );
    createCategory(category, (err, result) => {
        if(err){
            console.error(err);
            return res.status(500).json({message: "Database insert error"});
        }
        else{
            res.status(201).json({message: "category registered successfully"});
        }
    })
}

const getAllCategories = (req, res) => {
    getCategory((err, result) => {
        if(err){
            console.error(err);
            return res.status(500).json({message: "Database fetch error"});
        }
        else{
            res.status(200).json(result);
        }
    })
}

module.exports = {registerCategory, getAllCategories};