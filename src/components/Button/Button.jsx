import React, { useState } from 'react';
import './Button.css';
const Button = ({ text }) => {
  const [ripple, setRipple] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const horizontalPos = e.clientX - e.target.offsetLeft;
    const verticalPos = e.clientY - e.target.offsetTop;
    setPosition({
      x: horizontalPos,
      y: verticalPos,
    });
    setRipple(true);
    setTimeout(() => {
      setRipple(false);
      setPosition({ x: 0, y: 0 });
    }, 1500);

    console.log(e);
    window.scrollTo(0, e.screenY * 100);
  };

  return (
    <button className='ripple-button' onClick={handleClick}>
      {ripple && (
        <span
          className='ripple'
          style={{ left: position.x + 'px', top: position.y + 'px' }}
        ></span>
      )}
      {text}
    </button>
  );
};

export default Button;
