import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Portfolio</Link></li>
          <li><Link to='/gamedev'>Game Dev</Link></li>
          <li><Link to='/coder'>Coder</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;