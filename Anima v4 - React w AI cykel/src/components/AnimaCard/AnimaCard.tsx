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
      <div className="card-title">Cykla</div>
      <div className="card-image" />
      <AnimaButtonSmall className="anima-button-small-instance" />
    </div>
  );
};