import { useEffect, useState } from "react";
import data from "./data.json";
import "./App.css";

interface ExcursionItem {
  id: number;
  element: string;
  img: string;
  calories: number;
  weight: number;
}

function App() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [totalCaloriesWeight, setTotalCaloriesWeight] = useState({
    totalCalories: 0,
    totalWeight: 0,
  });
  const calories = 15;
  const weight = 10;

  useEffect(() => {
    console.log("selectedItems", selectedItems);
  }, [selectedItems]);

  const caulculateCaloriesWeigth = (items: number[]) => {
    console.log("items caulculateCaloriesWeigth", items);

    const selectedItemsData = data.filter((item) => items.includes(item.id));
    const totalCalories = selectedItemsData.reduce(
      (acc, item) => acc + item.calories,
      0
    );
    const totalWeight = selectedItemsData.reduce(
      (acc, item) => acc + item.weight,
      0
    );
    console.log("totalCalories", totalCalories);
    console.log("totalWeight", totalWeight);

    setTotalCaloriesWeight({ totalCalories, totalWeight });

    return { totalCalories, totalWeight };
  };

  const toggleSelection = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div id="root">
      <div>
        <h1>Equipamiento para Excursión</h1>
        <p>El minimo de Calorías es : {calories}</p>
        <p>El peso maximo es : {weight}</p>
      </div>

      <div className="container">
        {data.map((item: ExcursionItem) => (
          <div
            key={item.id}
            className={`card ${
              selectedItems.includes(item.id) ? "selected" : ""
            }`}
            onClick={() => toggleSelection(item.id)}
          >
            <img src={item.img} alt={item.element} />
            <h2>{item.element}</h2>
            <p>Peso: {item.weight} kg</p>
            <p>Calorias: {item.calories}</p>
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={() => caulculateCaloriesWeigth(selectedItems)}
          className="calculator"
        >
          Calcular
        </button>
        {totalCaloriesWeight.totalCalories && (
          <div>
            <h2>Resultado</h2>
            <p>Calorías: {totalCaloriesWeight.totalCalories}</p>
            <p>Peso: {totalCaloriesWeight.totalWeight} kg</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
