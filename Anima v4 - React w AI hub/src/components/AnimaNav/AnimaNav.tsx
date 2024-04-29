import React from "react";
import { AnimaButton } from "../../icons/AnimaButton";
import "./style.css";

interface Props {
  type: "no-x";
  className: string;
}

export const AnimaNav = ({ type, className }: Props): JSX.Element => {
  const navClassName = `anima-nav ${className || ''}`.trim();

  return (
    <div className={navClassName}>
      <AnimaButton className="anima-button" />
      <div className="nav-title">Mina favoriter</div>
    </div>
  );
};