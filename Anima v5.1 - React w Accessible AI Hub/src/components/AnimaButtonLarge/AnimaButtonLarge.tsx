import React from "react";
import "./style.css";

interface Props {
  className?: string;
  text?: string;
}

export const AnimaButtonLarge = ({ className = "", text = "Välj från lista" }: Props): JSX.Element => {
  return (
    <button className={`anima-button-large ${className}`}>
      <div className="choose">{text}</div>
    </button>
  );
};