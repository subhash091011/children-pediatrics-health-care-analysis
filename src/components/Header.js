// /src/components/Header.js
import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className='header'>
      {/* Add header content here */}
      <img
        src={logo}
        alt="Pediatric Healthcare Logo"
        style={{
          width: '80px',
          height: '80px',
          border: '2px solid #ffea32',
          borderRadius: '50%',
          padding: '5px',
        }}
      />
      <h1>Welcome to Pediatric Healthcare</h1>
      <p>Discover a world of caring for your child's health.</p>
    </header>
  );
}

export default Header;








