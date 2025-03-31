import { useState } from "react";

export interface ExcursionItem {
  id: number;
  calories: number;
  weight: number;
}
interface MessageBoxState {
  message: string;
  color: "green" | "red";
}
type SetMessageBox = React.Dispatch<React.SetStateAction<MessageBoxState>>;

export const useCalculator = (setMessageBox: SetMessageBox) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setMessageBox({ message: "", color: "green" })
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotals = (data: ExcursionItem[]) => {
    const selectedItemsData = data.filter((item) =>
      selectedItems.includes(item.id)
    );
    const totalCalories = selectedItemsData.reduce(
      (acc, item) => acc + item.calories,
      0
    );
    const totalWeight = selectedItemsData.reduce(
      (acc, item) => acc + item.weight,
      0
    );
    return { totalCalories, totalWeight };
  };

  return { selectedItems, toggleSelection, calculateTotals };
}