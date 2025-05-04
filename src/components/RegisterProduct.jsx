import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import axios from 'axios';

const RegisterProduct = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/categories/getCategories')
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));
    }, []);

  const [formData, setFormData] = useState({
    productImage: '',
    productName: '',
    productCategory: '',
    productQuantity: '',
    productPrice: '',
    productDate: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      productImage,
      productName,
      productCategory,
      productQuantity,
      productPrice,
      productDate
    } = formData;

    try {
      await axios.post('http://localhost:5000/api/products/addProduct', {
        productImage,
        productName,
        productCategory,
        productQuantity,
        productPrice,
        productDate
      });

      setMessage("✅ Product registered successfully!");
      setFormData({
        productImage: '',
        productName: '',
        productCategory: '',
        productQuantity: '',
        productPrice: '',
        productDate: ''
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <div className='dashboard-content'>
        <h1>Register Product</h1>

        <form onSubmit={handleSubmit} className='signup-form'>

          <input
            type="text"
            name='productImage'
            placeholder='Product Image link'
            value={formData.productImage}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name='productName'
            placeholder='Product Name'
            value={formData.productName}
            onChange={handleChange}
            required
          />

          <select
            name='productCategory'
            value={formData.productCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
                <option key={category._id} value={category.categoryName}>
                    {category.categoryName}
                </option>
                
            ) )}
          </select>

          <input
            type='number'
            name='productQuantity'
            placeholder='Product Quantity'
            value={formData.productQuantity}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name='productPrice'
            placeholder='Product Price'
            value={formData.productPrice}
            onChange={handleChange}
            required
          />

          <input
            type='date'
            name='productDate'
            value={formData.productDate}
            onChange={handleChange}
            required
          />

          <button type='submit'>Add Product</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterProduct;
