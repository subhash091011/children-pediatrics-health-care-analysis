// /src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* Add navigation content here */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li className="register"><Link to="/register">Register</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;
