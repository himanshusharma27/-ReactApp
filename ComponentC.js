import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const inputValue = useSelector((state) => state.inputValue);

  return (
    <div>
      <h2>Component C</h2>
      <p>{inputValue}</p>
    </div>
  );
};

export default ComponentC;
