import React from "react";
import "./CalculateButton.css";

interface CalculateButtonProps {
  disabled: boolean;
  onClick: () => void;
}

export const CalculateButton: React.FC<CalculateButtonProps> = ({
  disabled,
  onClick,
}) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      Calcular
    </button>
  );
};
