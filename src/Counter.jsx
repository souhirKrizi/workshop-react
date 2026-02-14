import React, { useState } from 'react';
import './Counter.css';

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div className="counter-container">
      <h2>Compteur : {count}</h2>
      <div className="counter-buttons">
        <button onClick={increment}>+{step}</button>
        <button onClick={decrement}>-{step}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
