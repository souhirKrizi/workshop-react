import React, { useState } from 'react';
import './ColorBox.css';

const ColorBox = ({ initialColor = '#FF5733' }) => {
  const [backgroundColor, setBackgroundColor] = useState(initialColor);

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    return randomColor;
  };

  const changeColor = () => {
    const newColor = generateRandomColor();
    setBackgroundColor(newColor);
  };

  return (
    <div className="color-box-container">
      <h2>Color Box</h2>
      <div 
        className="color-box"
        style={{ backgroundColor }}
      >
        <span className="color-code">{backgroundColor}</span>
      </div>
      <button onClick={changeColor} className="btn btn-change">
        Changer de couleur
      </button>
    </div>
  );
};

export default ColorBox;
