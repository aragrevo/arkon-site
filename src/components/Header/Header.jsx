import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/logos/logo2.png';

const Header = () => {
  const [showFixed, setShowFixed] = useState(false);
  // const [isVisible, element] = useNearScreen();
  // console.log(element);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 180;
      if (showFixed !== newShowFixed) {
        setShowFixed(newShowFixed);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  return (
    <header
      id='header'
      className={showFixed ? 'header' : 'header normal'}
      style={{ backgroundColor: showFixed ? '#ffffffcc' : 'transparent' }}
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
