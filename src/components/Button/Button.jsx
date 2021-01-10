import React, { useState } from 'react';
import './Button.css';
const Button = ({ text }) => {
  const [ripple, setRipple] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleClick = (e) => {
    // const horizontalPos =
    //   e.clientX - e.target.offsetLeft - e.target.offsetWidth / 2.5;
    const horizontalPos = e.clientX - e.target.offsetLeft;
    // const verticalPos =
    //   e.clientY - e.target.offsetTop - e.target.offsetHeight * 4.5;
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
