import React from "react";
import { AnimaButtonSmall } from "../AnimaButtonSmall";
import "./style.css";

interface Props {
  type: "bike";
  className: string;
}

export const AnimaCard = ({ type, className }: Props): JSX.Element => {
  const finalClassName = className || "default-anima-card-class";

  return (
    <div className={`anima-card ${finalClassName}`}>
      <h2 className="card-title">Cykla</h2>
      <div className="card-image" role="img" aria-label="Bike image"></div>
      <AnimaButtonSmall className="anima-button-small-instance" />
    </div>
  );
};