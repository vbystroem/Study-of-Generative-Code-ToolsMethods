import React from "react";
import { Link } from "react-router-dom";
import { AnimaButtonLarge } from "../../components/AnimaButtonLarge";
import { AnimaNav } from "../../components/AnimaNav";
import "./style.css";

export const Minafavoriterhub = () => {
  return (
    <div className="minafavoriterhub">
      <AnimaNav className="anima-nav-instance" type="no-x" />
      <p className="heading-medium">Hur vill du lägga till aktiviteter?</p>
      <Link className="button-container" to="/minafavoriteroption1-v3">
        <AnimaButtonLarge className="anima-button-large-wide" />
        <AnimaButtonLarge className="anima-button-large-wide" text="Se en aktivitet i taget" />
        <AnimaButtonLarge className="anima-button-large-wide" text="Skapa en egen aktivitet" />
      </Link>
    </div>
  );
};
