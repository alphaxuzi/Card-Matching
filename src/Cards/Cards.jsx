import "./Cards.css";
import { useEffect, useState } from "react";

function Cards() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);

  const cards = [
    "Cherry", "Grape", "Orange", "Pear", "Pineapple", "Kiwi",
    "Cherry", "Grape", "Orange", "Pear", "Pineapple", "Kiwi"
  ];

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };


  useEffect(() => {
    setShuffledCards(shuffleArray(cards)); 
  }, []);

  const handleCardClick = (index) => {
    if (!flippedCards.includes(index) && flippedCards.length < 2) {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2 ) {
      const [firstIndex, secondIndex] = flippedCards;
      if (shuffledCards[firstIndex] === shuffledCards[secondIndex]) {
        // Cards match, keep them flipped
        setFlippedCards([]);
      } else {
        // Cards do not match, flip them back after a short delay
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, shuffledCards]);
  

  return (
    <ul className="cards">
      {shuffledCards.map((card, index) => (
        <li
          key={index}
          className={`card ${flippedCards.includes(index) ? "flipped" : ""}`}
          onClick={() => handleCardClick(index)}
        >
          <div className="front">?</div>
          <div className="back">{card}</div>
        </li>
      ))}
    </ul>
  );
}

export default Cards;
