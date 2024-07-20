// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (

    <div className='nav-container'>
    <h3>ADVANCE ADMISSION SYSTEM</h3>
      <div className='nav'>
        <Link to="/main/home" style={{color: 'white', textDecoration: 'none', margin: '0 10px'}}>Home</Link>
        <Link to="/main/apply" style={{color: 'white', textDecoration: 'none', margin: '0 10px'}}>Apply</Link>
        <Link to="/main/contact" style={{color: 'white', textDecoration: 'none', margin: '0 10px'}}>Contact</Link>
        <Link to="/main/about" style={{color: 'white', textDecoration: 'none', margin: '0 10px'}}>About</Link>
      </div>
          
    </div>
  );
};

export default NavBar;
