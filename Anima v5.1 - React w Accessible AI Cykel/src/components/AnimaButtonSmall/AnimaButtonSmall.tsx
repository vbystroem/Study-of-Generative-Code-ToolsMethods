import React from "react";
import "./style.css";

interface Props {
  className: string;
}

export const AnimaButtonSmall = ({ className }: Props): JSX.Element => {
  const buttonClass = `anima-button-small ${className || ""}`.trim();

  return (
    <div className={buttonClass} role="button" tabIndex={0}>
      <div className="description">Se beskrivning</div>
    </div>
  );
};