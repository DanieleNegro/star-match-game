import React from 'react';
import '../App.css';

function PlayAgain({ resetGame }) {
  return (
    <div className="game-done w-100 h-100 d-flex align-items-center justify-content-center">
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

export default PlayAgain;
