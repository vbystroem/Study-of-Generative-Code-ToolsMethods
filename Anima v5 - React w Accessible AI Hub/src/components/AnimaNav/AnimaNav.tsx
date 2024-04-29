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
    <nav className={navClassName}>
      <AnimaButton className="anima-button" alt="Navigation button" />
      <h2 className="nav-title">Mina favoriter</h2>
    </nav>
  );
};