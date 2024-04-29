import React from "react";
import { AnimaButtonLarge } from "../../components/AnimaButtonLarge";
import { AnimaCard } from "../../components/AnimaCard";
import { AnimaNav } from "../../components/AnimaNav";
import { AnimaButtonCloseLarge2 } from "../../icons/AnimaButtonCloseLarge2";
import "./style.css";

export const Minafavoriteroption = (): JSX.Element => {
  try {
    return (
      <div className="minafavoriteroption">
        <AnimaNav
          className="anima-nav-instance"
          icon={<AnimaButtonCloseLarge2 className="anima-button-close-large-2" />}
          type="default"
        />
        <p className="heading-small">Vill du lägga till denna aktivitet?</p>
        <AnimaCard className="anima-card-instance" type="rope" />
        <div className="button-container">
          <AnimaButtonLarge />
          <AnimaButtonLarge choiceButtonClassName="anima-button-large-narrow" text="Ja, lägg till" />
        </div>
      </div>
    );
  } catch (error) {
    console.log("An error occurred in Minafavoriteroption component:", error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};