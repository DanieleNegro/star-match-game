import React from 'react';
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

export default StarsDisplay;
