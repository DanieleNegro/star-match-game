import React from 'react';
import '../App.css';
import { colors } from '../utils/Colors';

function PlayNumber({ number = 0, status = 'available', onNumberClick }) {
  return (
    <button
      key={number}
      className={`number ${colors[status]}`}
      onClick={() => onNumberClick(number, status)}
    >
      {number}
    </button>
  );
}

export default PlayNumber;
