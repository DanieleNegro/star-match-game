import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
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

PlayNumber.propTypes = {
  number: PropTypes.number,
  status: PropTypes.string,
  onNumberClick: PropTypes.func,
};

export default PlayNumber;
