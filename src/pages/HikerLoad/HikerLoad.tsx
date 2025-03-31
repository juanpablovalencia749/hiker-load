import { useEffect, useState } from "react";
import { Filters, Card, MessageBox, CalculateButton } from "../../components";
import { useMessageBox, useCalculator } from "../../hooks";
import "./HikerLoad.css";

interface ExcursionItem {
  id: number;
  element: string;
  img: string;
  calories: number;
  weight: number;
}

interface Options {
  minCalories: number[];
  maxWeight: number[];
}

export const HikerLoad = () => {
  const [data, setData] = useState<ExcursionItem[]>([]);
  const [minCalories, setMinCalories] = useState(15);
  const [maxWeight, setMaxWeight] = useState(10);
  const [options, setOptions] = useState<Options>({
    minCalories: [],
    maxWeight: [],
  });

  const { messageBox, updateMessageBox, setMessageBox } = useMessageBox();
  const { selectedItems, toggleSelection, calculateTotals } =
    useCalculator(setMessageBox);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data.json");
      const elements: ExcursionItem[] = await response.json();

      const minCalories = elements.reduce(
        (sum, item) => sum + item.calories,
        0
      );
      const maxWeight = elements.reduce((sum, item) => sum + item.weight, 0);

      setOptions({
        minCalories: Array.from({ length: minCalories }, (_, i) => i + 1),
        maxWeight: Array.from({ length: maxWeight }, (_, i) => i + 1),
      });

      setData(elements);
    };
    getData();
  }, []);

  const calculatorCaloriesWeight = () => {
    const { totalCalories, totalWeight } = calculateTotals(data);
    updateMessageBox(totalCalories, totalWeight, minCalories, maxWeight);
  };

  return (
    <div className="hiker-load">
      <h1 className="hiker-load__title">Hiker Load </h1>
      <Filters
        minCalories={minCalories}
        maxWeight={maxWeight}
        options={options}
        setMinCalories={setMinCalories}
        setMaxWeight={setMaxWeight}
      />
      <div className="container">
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            isSelected={selectedItems.includes(item.id)}
            toggleSelection={toggleSelection}
          />
        ))}
      </div>
      <CalculateButton
        disabled={selectedItems.length === 0}
        onClick={calculatorCaloriesWeight}
      />
      {messageBox.message && (
        <MessageBox message={messageBox.message} color={messageBox.color} />
      )}
    </div>
  );
};
