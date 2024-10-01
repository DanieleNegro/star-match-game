import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import './App.css';
import PlayNumber from './component/PlayNumber';
import StarsDisplay from './component/StarsDisplay';
import PlayAgain from './component/PlayAgain';
import { MAX_BUTTONS, useGameState } from './hooks/useGameState';
import { range, sum } from './utils/MathScience';
import { gameType } from './utils/GameStatus';
import { colors } from './utils/Colors';

function Game({ startNewGame }) {
  const {
    stars,
    candidateNums,
    availableNums,
    secondsLeft,
    isReady,
    setGameStatus,
    setIsReady,
  } = useGameState();

  const candidatesAreWrong = sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0
      ? gameType.won
      : secondsLeft === 0
      ? gameType.lost
      : gameType.active;

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) return colors.used;
    if (candidateNums.includes(number))
      return candidatesAreWrong ? colors.wrong : colors.candidate;
    return colors.available;
  };

  const onNumberClick = (number = 0, status = 'available') => {
    if (status === colors.used || secondsLeft === 0 || !isReady) return;

    const newCandidateNums =
      status === colors.available
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    setGameStatus(newCandidateNums);
  };

  return (
    <div className="game mt-7">
      <div className="help">
        <h1>Star Match</h1>
        <p>Pick 1 or more numbers that sum to the number of stars</p>
        <p>All numbers must be green to win!</p>
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== gameType.active ? (
            <PlayAgain resetGame={startNewGame} gameStatus={gameStatus} />
          ) : isReady ? (
            <StarsDisplay stars={stars} />
          ) : (
            <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
              <button
                type="button"
                className={`btn ${isReady ? 'btn-secondary' : 'btn-primary'}`}
                disabled={isReady}
                onClick={() => {
                  setIsReady();
                }}
              >
                Start!
              </button>
            </div>
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
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
}

function StarMatch() {
  const [gameId, setGameId] = useState(1);
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center flex-column">
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </div>
  );
}

export default StarMatch;
