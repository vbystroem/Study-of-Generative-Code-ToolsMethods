import React from "react";
import "./style.css";

interface Props {
  choiceButtonClassName: string;
  text: string;
}

export const AnimaButtonLarge = ({ choiceButtonClassName, text = "Nej, inte den" }: Props): JSX.Element => {
  return (
    <div className="anima-button-large">
      <div className={`choice-button ${choiceButtonClassName}`}>{text}</div>
    </div>
  );
};