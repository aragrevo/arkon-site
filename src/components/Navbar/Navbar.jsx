import React, { useState } from 'react';
import './Navbar.css';
import { menu } from '../../assets/db.json';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <section>
      <div
        className={`hamburger ${isActive ? 'clicked' : ''}`}
        onClick={toggleMenu}
      >
        <span className='line line1'></span>
        <span className='line line2'></span>
        <span className='line line3'></span>
      </div>
      <div className={`nav ${isActive ? 'show' : ''}`}>
        <ul className='nav-list'>
          {menu.map((item) => (
            <li key={item.title}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
