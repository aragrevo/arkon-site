import React from 'react';
import Button from '../Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id='home' className='hero background'>
      <div className='hero-container'>
        <h1 className='hero-title'>
          Construimos <span className='color-primary'>Sueños</span>
        </h1>
        <h3 className='hero-description'>
          Sé la estrella de rock que siempre quisiste ser
        </h3>
        <Button text='Contáctanos' />
      </div>
    </section>
  );
};

export default Hero;
