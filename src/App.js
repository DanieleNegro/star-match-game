import React, { useState } from 'react';
import './App.css';
import { random, range } from './utils/MathScience';

function App() {
  const maxButtons = 9;
  const [stars, setStars] = useState(random(1, maxButtons));
  return (
    <div className="game mt-7">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {range(1, stars).map((starId) => (
            <div key={starId} className="star" />
          ))}
        </div>
        <div className="right">
          {range(1, maxButtons).map((value) => (
            <button key={value} className="number">
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}

export default App;
