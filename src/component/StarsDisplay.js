import React from 'react';
import PropTypes from 'prop-types';
import { range } from '../utils/MathScience';

function StarsDisplay({ stars = 0 }) {
  return (
    <div className="">
      {range(1, stars).map((starId) => (
        <div key={starId} className="star" />
      ))}
    </div>
  );
}

StarsDisplay.propTypes = {
  stars: PropTypes.number,
};

export default StarsDisplay;
