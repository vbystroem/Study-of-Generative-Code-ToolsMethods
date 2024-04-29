import React from "react";
import { AnimaButtonLarge } from "../../components/AnimaButtonLarge";
import { AnimaCard } from "../../components/AnimaCard";
import { AnimaNav } from "../../components/AnimaNav";
import { AnimaButtonCloseLarge2 } from "../../icons/AnimaButtonCloseLarge2";
import "./style.css";

export const Minafavoriteroption = (): JSX.Element => {
  return (
    <div className="minafavoriteroption">
      <AnimaNav
        className="anima-nav-instance"
        icon={<AnimaButtonCloseLarge2 className="anima-button-close-large-2" />}
        type="default"
      />
      <h2 className="heading-small">Vill du lägga till denna aktivitet?</h2>
      <AnimaCard className="anima-card-instance" type="bike" />
      <div className="button-container">
        <AnimaButtonLarge text="Nej, tack" />
        <AnimaButtonLarge choiceButtonClassName="anima-button-large-narrow" text="Ja, lägg till" />
      </div>
    </div>
  );
};