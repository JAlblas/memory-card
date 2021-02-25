import React from "react";

const Card = (props) => {
    console.log(props);

    return (<div className="card" onClick={props.handleClick}>¨
        <p>{props.name}</p>
        <img src={props.image} alt={props.description}></img>
    </div>); 
    
}


export default Card;