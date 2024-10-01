import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import './App.css';
import { random, randomSumIn, range, sum } from './utils/MathScience';
import PlayNumber from './component/PlayNumber';
import StarsDisplay from './component/StarsDisplay';
import PlayAgain from './component/PlayAgain';

const MAX_BUTTONS = 9;

function useStarMatch() {
  const [stars, setStars] = useState(random(1, MAX_BUTTONS));
  const [availableNums, setAvailableNums] = useState(range(1, MAX_BUTTONS));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidatesAreWrong = sum(candidateNums) > stars;

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) return 'used';
    if (candidateNums.includes(number))
      return candidatesAreWrong ? 'wrong' : 'candidate';
    return 'available';
  };

  const onNumberClick = (number = 0, status = 'available') => {
    if (status === 'used') return;
    const newCandidateNums =
      status === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);
    if (sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStars(randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  const resetGame = () => {
    setStars(random(1, MAX_BUTTONS));
    setAvailableNums(range(1, MAX_BUTTONS));
    setCandidateNums([]);
  };

  return {
    stars,
    gameIsDone: availableNums.length === 0,
    numberStatus,
    onNumberClick,
    resetGame,
  };
}

function StarMatch() {
  const { stars, gameIsDone, numberStatus, onNumberClick, resetGame } =
    useStarMatch();

  return (
    <div className="game mt-7">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameIsDone ? (
            <PlayAgain resetGame={resetGame} />
          ) : (
            <StarsDisplay stars={stars} />
          )}
        </div>
        <div className="right">
          {range(1, MAX_BUTTONS).map((value) => (
            <PlayNumber
              key={value}
              number={value}
              status={numberStatus(value)}
              onNumberClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}

export default StarMatch;
