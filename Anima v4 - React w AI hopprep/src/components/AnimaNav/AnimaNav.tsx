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
  icon = <AnimaButtonCloseLarge className="anima-button-close" />,
}: Props): JSX.Element => {
  const navClasses = `anima-nav ${className || ''}`.trim();

  const renderIcon = () => {
    try {
      return icon;
    } catch (error) {
      console.log("Error rendering icon in AnimaNav:", error);
      return null;
    }
  };

  return (
    <div className={navClasses}>
      <AnimaButton className="anima-button" />
      <div className="nav-title">Mina favoriter</div>
      {renderIcon()}
    </div>
  );
};