import React from "react";

const Card = (props) => {

    return (<div className="card" onClick={props.handleClick}>
        <img src={props.image} alt={props.description} id={props.id}></img>
    </div>); 
    
}


export default Card;