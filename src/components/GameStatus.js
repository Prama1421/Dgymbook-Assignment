import React from "react";

const GameStatus = ({ message, onReset }) => {
  return (
    <div>
      {message && <h2>{message}</h2>}
      {message && <button onClick={onReset}>New Game</button>}
    </div>
  );
};

export default GameStatus;
