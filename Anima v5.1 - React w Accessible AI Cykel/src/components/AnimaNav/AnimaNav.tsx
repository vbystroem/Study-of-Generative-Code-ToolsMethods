import React from "react";
import { AnimaButton } from "../../icons/AnimaButton";
import { AnimaButtonCloseLarge } from "../../icons/AnimaButtonCloseLarge";
import "./style.css";

interface Props {
  type: "default";
  className: string;
  icon?: JSX.Element;
}

export const AnimaNav = ({
  type,
  className,
  icon = <AnimaButtonCloseLarge className="anima-button-close" alt="Close" />,
}: Props): JSX.Element => {
  const navClasses = `anima-nav ${className || ''}`.trim();

  return (
    <nav className={navClasses}>
      <AnimaButton className="anima-button" alt="Menu" />
      <h1 className="nav-title">Mina favoriter</h1>
      {icon}
    </nav>
  );
};