import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Home.css'; // optional: for custom styles
import Navbar from './navbar/Navbar';

const Dashboard = () => {
  const navigate = useNavigate();

   // 🔒 Redirect if not logged in
   useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  

  return (
    <div>
      <Navbar/>

      <div className="dashboard-content">
        <h1>Welcome to the Dashboard!</h1>
        <p>You are now logged in.</p>
      </div>
    </div>
  );
};

export default Dashboard;
