import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'black',

  }

  return (
    <div className="App">
        <nav>
        <h3>logo</h3>
            <ul className='nav-links'>
              <Link to='/about' style={navStyle}>
                <li>About</li>
              </Link>
              <Link to='/shop'style={navStyle}>
                <li>Shop</li>
              </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;