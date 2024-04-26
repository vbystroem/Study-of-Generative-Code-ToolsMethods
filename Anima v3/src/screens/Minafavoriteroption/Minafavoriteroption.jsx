import React from "react";
import { AnimaButtonLargeWrapper } from "../../components/AnimaButtonLargeWrapper";
import { AnimaCard } from "../../components/AnimaCard";
import { AnimaNav } from "../../components/AnimaNav";
import { AnimaButtonCloseLarge3 } from "../../icons/AnimaButtonCloseLarge3";
import "./style.css";

export const Minafavoriteroption = () => {
  return (
    <div className="minafavoriteroption">
      <AnimaNav
        className="design-component-instance-node"
        icon={<AnimaButtonCloseLarge3 className="anima-button-close-large-3" />}
        type="default"
      />
      <p className="heading-small">Vill du lägga till denna aktivitet?</p>
      <AnimaCard className="anima-card-instance" type="rope" />
      <div className="div">
        <AnimaButtonLargeWrapper to="/minafavoriteroption1-v3" />
        <AnimaButtonLargeWrapper choiceButtonClassName="anima-button-large-narrow" text="Ja, lägg till" />
      </div>
    </div>
  );
};
