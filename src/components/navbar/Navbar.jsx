import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear session or token if needed
        localStorage.removeItem('isLoggedIn');
        navigate('/');
      };
  return (
    <nav className="navbar">
        <div className="navbar-brand">MyApp</div>
        <ul className="nav-links">
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About us</Link></li>
          <li><Link to="/registerProduct">Add product</Link></li>
          <li><Link to="/registerCategory">Add Category</Link></li>
          <li><Link to="/products">Display product</Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </nav>
  )
}

export default Navbar