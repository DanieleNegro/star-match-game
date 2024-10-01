import React, { useState } from 'react';
import Game from '../component/Game';

function StarMatch() {
  const [gameId, setGameId] = useState(1);
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center flex-column">
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </div>
  );
}

export default StarMatch;
