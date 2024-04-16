import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavRope from "../components/NavRope";
import Card from "../components/Card";
import ButtonLargeNarrowNo from "../components/ButtonLargeNarrowNo";
import ButtonLargeNarrowYes from "../components/ButtonLargeNarrowYes";
import styles from "./MinaFavoriterOption2V.module.css";

const MinaFavoriterOption2V: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonLargeNarrowClick = useCallback(() => {
    navigate("/minafavoriteroption1-v5");
  }, [navigate]);

  return (
    <div className={styles.minafavoriteroption2V5}>
      <NavRope />
      <main className={styles.main}>
        <h2 className={styles.activitytitle}>
          Vill du lägga till denna aktivitet?
        </h2>
        <Card
          cardTitle="Hopprep"
          cardImage="/cardimage1@2x.jpg"
          propMinWidth="4.688rem"
        />
        <section className={styles.buttoncontainer}>
          <ButtonLargeNarrowNo
            onButtonLargeNarrowClick={onButtonLargeNarrowClick}
          />
          <ButtonLargeNarrowYes
            choiceButton="Ja, lägg till"
            propPadding="var(--padding-sm) var(--padding-mid)"
            propFlex="0.8704"
            propFlexDirection="row"
            propMinWidth="8rem"
            propWidth="unset"
            propTextAlign="left"
            propDisplay="inline-block"
            propMinWidth1="5.688rem"
            propWidth1="unset"
            propLineHeight="unset"
            propAlignSelf="stretch"
            buttonLargeNarrowFlexWrap="wrap"
            choiceButtonFlex="1"
          />
        </section>
      </main>
    </div>
  );
};

export default MinaFavoriterOption2V;
