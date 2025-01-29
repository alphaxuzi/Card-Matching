import "./Cards.css";
import { useEffect, useState } from "react";

function Cards() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]); // Keep track of matched cards
  const [shuffledCards, setShuffledCards] = useState([]);

  const cards = [
    "Cherry",
    "Grape",
    "Orange",
    "Pear",
    "Pineapple",
    "Kiwi",
    "Cherry",
    "Grape",
    "Orange",
    "Pear",
    "Pineapple",
    "Kiwi",
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
    if (!flippedCards.includes(index) && flippedCards.length < 2 && !matchedCards.includes(index)) {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (shuffledCards[firstIndex] === shuffledCards[secondIndex]) {
        // Cards match, keep them flipped permanently
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => {
        setFlippedCards([]); // Reset flipped cards after checking
      }, 1000);
    }
  }, [flippedCards, shuffledCards]);

  return (
    <ul className="cards">
      {shuffledCards.map((card, index) => (
        <li
          key={index}
          className={`card ${flippedCards.includes(index) || matchedCards.includes(index) ? "flipped" : ""}`}
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
