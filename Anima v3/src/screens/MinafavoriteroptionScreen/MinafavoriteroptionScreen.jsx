import React from "react";
import { AnimaButtonLargeWrapper } from "../../components/AnimaButtonLargeWrapper";
import { AnimaCard } from "../../components/AnimaCard";
import { AnimaNav } from "../../components/AnimaNav";
import { AnimaButtonCloseLarge4 } from "../../icons/AnimaButtonCloseLarge4";
import "./style.css";

export const MinafavoriteroptionScreen = () => {
  return (
    <div className="minafavoriteroption-screen">
      <AnimaNav
        className="anima-nav-2"
        icon={<AnimaButtonCloseLarge4 className="anima-button-close-large-4" />}
        type="default"
      />
      <p className="text-wrapper">Vill du lägga till denna aktivitet?</p>
      <AnimaCard className="anima-card-2" type="bike" />
      <div className="button-container-2">
        <AnimaButtonLargeWrapper text="Nej, inte den" to="/minafavoriteroption2-v3" />
        <AnimaButtonLargeWrapper choiceButtonClassName="anima-button-large-instance" text="Ja, lägg till" />
      </div>
    </div>
  );
};
