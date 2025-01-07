import "./Cards.css";
import { useState } from "react";
import React from "react";

function Cards() {
  const [selectedFruits, setSelectedFruits] = useState({});
  const [flippedCard, setFlippedCard] = useState(null);

  const cards = [
    "Mango",
    "Blueberry",
    "Lemon",
    "Strawberry",
    "Banana",
    "Apple",
    "Cherry",
    "Grape",
    "Orange",
    "Pear",
    "Pineapple",
    "Kiwi",
  ];

  return (
    <ul className="cards">
      {cards.map((card) => (
        <li
          key={card}
          className={`card ${flippedCard === card ? "flipped" : ""}`}
        ></li>
      ))}
    </ul>
  );
}

export default Cards;
