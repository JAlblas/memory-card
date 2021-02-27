import React from "react";

const Scoreboard = (props) => {
    return (<div id="scoreboard">
        <p>High score: {props.highscore}</p>
        <p>Current score: {props.score}</p>
    </div>)
}

export default Scoreboard;