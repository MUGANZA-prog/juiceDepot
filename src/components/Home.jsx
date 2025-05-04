import './Home.css';
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { first_name, last_name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      return setMessage("Passwords do not match");
    }

    try {
      await axios.post('http://localhost:5000/api/signup', {
        first_name,
        last_name,
        email,
        password
      });

      setMessage("Signup successful!");
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className='div'>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create Account</h2>

        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required />

        <button type="submit">Sign Up</button>
        {message && <p>{message}</p>}
      <span>already have account?<a href="/">Signin</a> </span>
      </form>
    </div>
  );
};

export default Home;
