
import './App.css';
import React, { useState, useEffect } from "react";
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
    }
  }, [score]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetGame = () => {
    setScore(0);
  }

  return (
    <div className="App">
      <Scoreboard score={score} highscore={highscore}/>
      <Gameboard incrementScore={incrementScore} resetGame={resetGame}/>
    </div>
  );
}

export default App;
