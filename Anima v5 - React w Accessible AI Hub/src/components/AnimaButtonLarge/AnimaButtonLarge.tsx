import React from "react";
import "./style.css";

interface Props {
  className?: string;
  text?: string;
}

export const AnimaButtonLarge = ({ className = "", text = "Välj från lista" }: Props): JSX.Element => {
  const safeClassName = typeof className === "string" ? className : "";
  const buttonText = text || "Välj från lista";

  return (
    <button className={`anima-button-large ${safeClassName}`}>
      <div className="choose">{buttonText}</div>
    </button>
  );
};