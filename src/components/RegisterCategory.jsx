import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import axios from 'axios'

const RegisterCategory = () => {
  const[formData, setFormData] = useState({
    categoryName: ''
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { categoryName } = formData;


    try{
      await axios.post('http://localhost:5000/api/categories/addCategory', {
        categoryName
      });

      setMessage(" Category registered successfully!");

      setFormData({
        categoryName: ''
      });
    }
    catch(error){
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div>
        <Navbar/>
        <div className='dashboard-content'>
            <h1>Register Category</h1>

            <form  onSubmit={handleSubmit} className='signup-form'>
                <input type='text' name = 'categoryName' placeholder='CategoryName' value={formData.categoryName} onChange={handleChange} required/>

                <button type='submit'>Add Category</button>

                {message && <p>{message}</p>}
            </form>

        </div>
    </div>
  )
}

export default RegisterCategory;