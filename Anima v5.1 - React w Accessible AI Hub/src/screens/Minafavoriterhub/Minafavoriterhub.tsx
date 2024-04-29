import React from "react";
import { AnimaButtonLarge } from "../../components/AnimaButtonLarge";
import { AnimaNav } from "../../components/AnimaNav";
import "./style.css";

export const Minafavoriterhub = (): JSX.Element => {
  try {
    return (
      <div className="minafavoriterhub">
        <AnimaNav className="anima-nav-instance" type="no-x" />
        <h1 className="heading-medium">Hur vill du lägga till aktiviteter?</h1>
        <div className="button-container">
          <AnimaButtonLarge className="anima-button-large-wide" text="Se en aktivitet i taget" />
          <AnimaButtonLarge className="anima-button-large-wide" text="Skapa en egen aktivitet" />
        </div>
      </div>
    );
  } catch (error) {
    console.log("An error occurred in Minafavoriterhub component:", error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};