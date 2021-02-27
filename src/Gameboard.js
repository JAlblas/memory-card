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

    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        if(!localStorage.getItem('cards')) {
            getCardData().then((data) => {
                let filteredData = data.Classic.filter(card => card.img);
                localStorage.setItem('cards', JSON.stringify(filteredData));
                selectCards(filteredData);
            }).catch(e => console.log(e));
          } else {
            selectCards(JSON.parse(localStorage.getItem('cards')));
          }

    }, []);

    const selectCards = (cardsInput) => {
        let newCards = [...cardsInput];
        let maxStartIndex = newCards.length - 10;
        let startIndex = Math.floor(Math.random() * maxStartIndex);
        console.log(newCards.slice(startIndex, startIndex + 10));
        setCards(newCards.slice(startIndex, startIndex + 10));
    }
    
    const randomizeCards = () => {
        let tempCards = [...cards];
        for (let i = tempCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = tempCards[i];
            tempCards[i] = tempCards[j];
            tempCards[j] = temp;
        }        
        setCards(tempCards);
    };

    const handleClick = (e) => {
        let cardId = e.target.id;
        if (selectedCards.includes(cardId)) {
            setSelectedCards([]);
            props.resetGame();
            selectCards(JSON.parse(localStorage.getItem('cards')));
        } else {
            let newSelectedCards = [...selectedCards];
            newSelectedCards.push(cardId);
            setSelectedCards(newSelectedCards);
            props.incrementScore();
            randomizeCards();
        }        
    };

    if (cards.length === 0) {
        return <p>Loading cards...</p>;
    }
    return (
        <div>
            <div id="gameboard">
                {cards.map(card => (
                    <Card
                    handleClick={handleClick}
                    id={card.cardId}
                    key={card.cardId}
                    name={card.name}
                    image={card.img}
                    text={card.text}
                    />
                ))
                }
            </div>
        </div>


    )
}

export default Gameboard;