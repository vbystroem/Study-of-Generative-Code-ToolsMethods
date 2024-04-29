import React from "react";
import { AnimaButtonSmall } from "../AnimaButtonSmall";
import "./style.css";

interface Props {
  type: "rope";
  className: string;
}

export const AnimaCard = ({ type, className }: Props): JSX.Element => {
  return (
    <div className={`anima-card ${className}`}>
      <h2 className="card-title">Hopprep</h2>
      <div className="card-image" role="img" aria-label="Hopprep image"></div>
      <AnimaButtonSmall className="anima-button-small-instance" />
    </div>
  );
};