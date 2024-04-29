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
      <div className="card-title">Hopprep</div>
      <div className="card-image" />
      <AnimaButtonSmall className="anima-button-small-instance" />
    </div>
  );
};