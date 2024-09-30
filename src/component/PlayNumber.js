import React from 'react';
import '../App.css';
import { colors } from '../utils/Colors';

function PlayNumber({ number = 0, status = 'available' }) {
  const handlerClick = () => {};
  return (
    <button
      key={number}
      className="number"
      style={{ backgroundColor: colors[status] }}
      onClick={handlerClick}
    >
      {number}
    </button>
  );
}

export default PlayNumber;
