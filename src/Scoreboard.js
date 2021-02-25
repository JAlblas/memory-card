import React, { useState } from "react";

const Scoreboard = (props) => {
    return (<div id="scoreboard">
        <p>{props.score}</p>
        <p>{props.highscore}</p>
    </div>)
}

export default Scoreboard;