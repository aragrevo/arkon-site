import React from 'react';
import Button from '../../components/Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id='home' className='hero background'>
      <div className='hero-container'>
        <h1 className='hero-title'>
          Construimos <span className='color-primary'>Sueños</span>
        </h1>
        <h2 className='hero-description'>
          Un mundo de soluciones prácticas y rápidas
        </h2>
        <Button text='Contáctanos' />
      </div>
    </section>
  );
};

export default Hero;
