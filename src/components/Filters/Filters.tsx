import React from "react";
import "./Filters.css";

interface FiltersProps {
  minCalories: number;
  maxWeight: number;
  options: { minCalories: number[]; maxWeight: number[] };
  setMinCalories: (value: number) => void;
  setMaxWeight: (value: number) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  minCalories,
  maxWeight,
  options,
  setMinCalories,
  setMaxWeight,
}) => {
  return (
    <div className="filters">
      <div className="filters__group">
        <label className="filters__label" htmlFor="minCalories">
          Calorías mínimas:
        </label>
        <select
          id="minCalories"
          className="filters__select"
          value={minCalories}
          onChange={(e) => setMinCalories(Number(e.target.value))}
        >
          {options.minCalories.map((cal) => (
            <option key={cal} value={cal}>
              {cal} kcal
            </option>
          ))}
        </select>
      </div>
      <div className="filters__group">
        <label className="filters__label" htmlFor="maxWeight">
          Peso máximo:
        </label>
        <select
          id="maxWeight"
          className="filters__select"
          value={maxWeight}
          onChange={(e) => setMaxWeight(Number(e.target.value))}
        >
          {options.maxWeight.map((weight) => (
            <option key={weight} value={weight}>
              {weight} kg
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
