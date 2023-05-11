import React from 'react';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../store/actions';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setInputValue(value));
  };

  return (
    <div>
      <h2>Component B</h2>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;

