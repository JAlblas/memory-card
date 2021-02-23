import React, { useState } from "react";

const Scoreboard = (props) => {
    const [score, setScore] = useState(0);

    const incrementScore = () => {
        setScore(score + 1);
    };

    return <p>{score}</p>
}

export default Scoreboard;