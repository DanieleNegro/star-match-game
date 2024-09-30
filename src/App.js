import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import './App.css';
import { random, range, sum } from './utils/MathScience';
import PlayNumber from './component/PlayNumber';
import StarsDisplay from './component/StarsDisplay';

function StarMatch() {
  const maxButtons = 9;
  const [stars, setStars] = useState(random(1, maxButtons));
  const [availableNums, setAvailableNums] = useState(range(1, maxButtons));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidatesAreWrong = sum(candidateNums) > stars;

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) return 'used';
    if (candidateNums.includes(number))
      return candidatesAreWrong ? 'wrong' : 'candidate';
    return 'available';
  };

  return (
    <div className="game mt-7">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay stars={stars} />
        </div>
        <div className="right">
          {range(1, maxButtons).map((value) => (
            <PlayNumber
              key={value}
              number={value}
              status={numberStatus(value)}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}

export default StarMatch;
