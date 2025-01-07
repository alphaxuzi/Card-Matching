import "./FruitCard.css";
import { useState } from "react";
import { fetchFruitData } from "../../utils/FruityVIceApi";
import React from "react";

function Cards({ onFruitSelect }) {
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

  const handleCardClick = async (fruit) => {
    if (flippedCard !== fruit) {
      setFlippedCard(fruit);

      if (!selectedFruits[fruit]) {
        const data = await fetchFruitData(fruit);
        setSelectedFruits((prev) => ({ ...prev, [fruit]: data }));
        onFruitSelect(data);
      }
    } else {
      setFlippedCard(null);
      onFruitSelect(null);
    }
  };

  return (
    <ul className="fruitcards">
      {fruits.map((fruit) => (
        <li
          key={fruit}
          className={`fruitcard ${flippedCard === fruit ? "flipped" : ""}`}
          onClick={() => handleCardClick(fruit)}
        >
          {flippedCard === fruit ? (
            <div className="fruit-info">
              <p>{selectedFruits[fruit]?.name || "Loading..."}</p>
              <p>
                Calories: {selectedFruits[fruit]?.nutritions?.calories || "N/A"}
              </p>
            </div>
          ) : (
            <span>{fruit}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Cards;
