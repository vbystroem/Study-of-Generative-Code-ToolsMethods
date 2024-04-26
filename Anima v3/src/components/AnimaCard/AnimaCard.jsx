/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AnimaButtonSmall } from "../AnimaButtonSmall";
import "./style.css";

export const AnimaCard = ({ type, className }) => {
  return (
    <div className={`anima-card ${className}`}>
      <div className="card-title">
        {type === "blank" && <>Aktivitet</>}

        {type === "rope" && <>Hopprep</>}

        {type === "bike" && <>Cykla</>}
      </div>
      <div className={`card-image ${type}`} />
      <AnimaButtonSmall className="anima-button-small-instance" />
    </div>
  );
};

AnimaCard.propTypes = {
  type: PropTypes.oneOf(["rope", "bike", "blank"]),
};
