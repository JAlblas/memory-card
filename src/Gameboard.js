import React, { useState, useEffect } from "react";
import Card from './Card';

async function getCardData() {

    const response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.REACT_APP_API_KEY ,
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
        }
    })
    if (response.status === 400) {
        console.log("Error!");
        //throwErrorMsg();
    } else {
        return await response.json();
    }
}

const Gameboard = (props) => {

    const [cards, setCards] = useState([
    ]);

    useEffect(() => {
        getCardData().then((data) => {
            console.log("DATA INCOMING!");
            console.log(data);
            let filteredData = data.Classic.filter(card => card.img)
            setCards(filteredData);
        }).catch(e => console.log(e));
    }, []);

    const randomizeCards = () => {
        console.log("randomizing cards");
        let tempCards = [...cards];
        for (let i = tempCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = tempCards[i];
            tempCards[i] = tempCards[j];
            tempCards[j] = temp;
        }        
        setCards(tempCards);
    };

    const handleClick = () => {
        console.log("Clicked!");
    };

    return (
        <div id="gameboard">
        {cards.map(card => (
            <Card
              handleClick={randomizeCards}
              id={card.cardId}
              key={card.cardId}
              name={card.name}
              image={card.img}
              text={card.text}
            />
          ))
        }
        </div>
    )
}

export default Gameboard;