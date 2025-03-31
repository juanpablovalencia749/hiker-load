import React from "react";
import "./Card.css";

interface CardProps {
  item: {
    id: number;
    element: string;
    img: string;
    calories: number;
    weight: number;
  };
  isSelected: boolean;
  toggleSelection: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({
  item,
  isSelected,
  toggleSelection,
}) => {
  return (
    <div
      className={`card ${isSelected ? "card--selected" : ""}`}
      onClick={() => toggleSelection(item.id)}
    >
      <img src={item.img} alt={item.element} className="card__image" />
      <h2 className="card__title">{item.element}</h2>
      <div className="card__info__container">
        <p className="card__info">
          <strong>Peso:</strong> {item.weight} kg
        </p>
        <p className="card__info">
          <strong>Calorías:</strong> {item.calories} kcal
        </p>
      </div>
    </div>
  );
};
