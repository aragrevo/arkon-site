import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/logos/logo2.png';

const Header = ({ scroll }) => {
  const [background, setBackground] = useState('transparent');
  const [transform, setTransform] = useState(false);
  useEffect(() => {
    switch (true) {
      case scroll < 7:
        setBackground('transparent');
        setTransform(false);
        break;
      case scroll >= 7 && scroll < 25:
        setBackground('#fff');
        setTransform(true);
        break;
      case scroll >= 25 && scroll < 50:
        setBackground('#da4747');
        setTransform(true);
        break;
      case scroll >= 50 && scroll < 75:
        setBackground('#db6400');
        setTransform(true);
        break;
      case scroll >= 75 && scroll < 100:
        setBackground('#61b15a');
        setTransform(true);
        break;
      case scroll === 100:
        setBackground('#ffa62b');
        setTransform(true);
        break;
      default:
        setBackground('#transparent');
        setTransform(false);
        break;
    }
  }, [scroll, background]);
  return (
    // <header id='header' className={`header ${background}`}>
    <header
      id='header'
      className={transform ? 'header' : 'header normal'}
      style={{ backgroundColor: background }}
    >
      <div className='container'>
        <h1 className='header-logo'>
          <a href='#home'>
            <img src={logo} width='186' height='60' alt='Arkon logotipo' />
            <span className='color-primary'>Ar</span>
            <span className='color-primary'>K</span>
            <span className='color-secondary'>on</span>
            <small>Arquitectura Integral</small>
          </a>
        </h1>
      </div>
    </header>
  );
};

export default Header;
