/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const AnimaButtonLargeWrapper = ({ choiceButtonClassName, text = "Nej, inte den", to }) => {
  return (
    <Link className="anima-button-large-wrapper" to={to}>
      <div className={`choice-button ${choiceButtonClassName}`}>{text}</div>
    </Link>
  );
};

AnimaButtonLargeWrapper.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};
