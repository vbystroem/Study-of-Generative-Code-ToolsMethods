import React from "react";
import { AnimaButtonLarge } from "../../components/AnimaButtonLarge";
import { AnimaNav } from "../../components/AnimaNav";
import "./style.css";

export const Minafavoriterhub = (): JSX.Element => {
  return (
    <div className="minafavoriterhub">
      <AnimaNav className="anima-nav-instance" type="no-x" />
      <h2 className="heading-medium">Hur vill du lägga till aktiviteter?</h2>
      <div className="button-container">
        <AnimaButtonLarge className="anima-button-large-wide" text="Se en aktivitet i taget" />
        <AnimaButtonLarge className="anima-button-large-wide" text="Skapa en egen aktivitet" />
      </div>
    </div>
  );
};