import React, { useState } from "react";

const Scoreboard = (props) => {
    return (<div id="scoreboard">
        <p>Score: {props.score}</p>
        <p>High score: {props.highscore}</p>
    </div>)
}

export default Scoreboard;