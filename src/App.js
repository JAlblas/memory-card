
import './App.css';
import React, { useState, useEffect } from "react";
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <Scoreboard score={score} highscore={highscore}/>
      <Gameboard incrementScore={incrementScore}/>
    </div>
  );
}

export default App;
