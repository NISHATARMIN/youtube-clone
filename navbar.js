// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">hme</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
