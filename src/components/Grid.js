import React from "react";
import "../styles/grid.css";

const Grid = ({ guesses, targetWord }) => {
  const rows = 6;
  const columns = 5;

  return (
    <div className="grid">
      {Array.from({ length: rows * columns }).map((_, i) => {
        const row = Math.floor(i / columns);
        const col = i % columns;
        const letter = guesses[row] ? guesses[row][col] : "";

        let className = "cell";
        if (letter) {
          if (targetWord[col] === letter) className += " correct";
          else if (targetWord.includes(letter)) className += " present";
          else className += " absent";
        }

        return <div key={i} className={className}>{letter}</div>;
      })}
    </div>
  );
};

export default Grid;
