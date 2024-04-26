/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AnimaButton } from "../../icons/AnimaButton";
import { AnimaButtonCloseLarge1 } from "../../icons/AnimaButtonCloseLarge1";
import "./style.css";

export const AnimaNav = ({ type, className, icon = <AnimaButtonCloseLarge1 className="anima-button-close" /> }) => {
  return (
    <div className={`anima-nav ${type} ${className}`}>
      <AnimaButton className={`${type === "default" ? "class" : "class-2"}`} />
      <div className="nav-title">Mina favoriter</div>
      {type === "default" && <>{icon}</>}
    </div>
  );
};

AnimaNav.propTypes = {
  type: PropTypes.oneOf(["no-x", "default"]),
};
