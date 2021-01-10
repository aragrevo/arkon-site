import React from 'react';
import './FloatButton.css';

const FloatButton = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=573044580373&text=Hola%20Arkon%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.'
      className='float'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        className='my-float'
        src='https://cdn.svgporn.com/logos/whatsapp.svg'
        alt='whatsapp'
      />
    </a>
  );
};

export default FloatButton;
