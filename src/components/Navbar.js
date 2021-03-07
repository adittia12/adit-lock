import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
       <Link to="/">JONS</Link>
      </div>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar;