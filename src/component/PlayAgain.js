import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { gameType } from '../utils/GameStatus';

function PlayAgain({ resetGame, gameStatus }) {
  return (
    <div className="game-done w-100 h-100 d-flex align-items-center justify-content-center flex-column">
      <div className={`message ${gameStatus}`}>
        {gameStatus === gameType.lost ? 'Game Over' : 'You win!'}
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => resetGame()}
      >
        Play Again
      </button>
    </div>
  );
}

PlayAgain.propTypes = {
  gameStatus: PropTypes.string,
  resetGame: PropTypes.func,
};

export default PlayAgain;
