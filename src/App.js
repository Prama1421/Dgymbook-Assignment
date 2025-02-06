import './App.css';
import React, { useState } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import DarkModeToggle from "./components/DarkModeToggle";

const WORDS = ["react", "clone", "apple", "space", "music", 
  "table", "chair", "cloud", "green", "happy"];
const TARGET_WORD = WORDS[Math.floor(Math.random() * WORDS.length)];

const App = () => {
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const handleGuess = (word) => {
    if (word.length !== 5) {
      setMessage("Word must be 5 letters!");
      return;
    }

    setGuesses([...guesses, word]);

    if (word === TARGET_WORD) {
      setMessage("🎉 Congratulations! You won!");
      setGameOver(true);
    } else if (guesses.length + 1 === 6) {
      setMessage(`😢 Game Over! The word was: ${TARGET_WORD.toUpperCase()}`);
      setGameOver(true);
    } else {
      setMessage("");
    }
  };

  const resetGame = () => {
    setGuesses([]);
    setGameOver(false);
    setMessage("");
  };

  return (
    <div className="app">
      <DarkModeToggle />
      <h1 className="title">Wordle Clone</h1>
      <Grid guesses={guesses} targetWord={TARGET_WORD} />
      <Keyboard onGuess={handleGuess} disabled={gameOver} />
      <GameStatus message={message} onReset={resetGame} />
    </div>
  );
};

export default App;
