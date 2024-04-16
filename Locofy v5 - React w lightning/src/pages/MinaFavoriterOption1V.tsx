import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBike from "../components/NavBike";
import Card from "../components/Card";
import ButtonLargeNarrowNo from "../components/ButtonLargeNarrowNo";
import ButtonLargeNarrowYes from "../components/ButtonLargeNarrowYes";
import styles from "./MinaFavoriterOption1V.module.css";

const MinaFavoriterOption1V: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonLargeNarrowClick = useCallback(() => {
    navigate("/minafavoriteroption2-v5");
  }, [navigate]);

  return (
    <div className={styles.minafavoriteroption1V5}>
      <NavBike />
      <main className={styles.main}>
        <h2 className={styles.activitytitle}>
          Vill du lägga till denna aktivitet?
        </h2>
        <Card cardTitle="Cykla" cardImage="/cardimage@2x.jpg" />
        <footer className={styles.buttoncontainer}>
          <ButtonLargeNarrowNo
            onButtonLargeNarrowClick={onButtonLargeNarrowClick}
          />
          <ButtonLargeNarrowYes choiceButton="Ja, lägg till" />
        </footer>
      </main>
    </div>
  );
};

export default MinaFavoriterOption1V;
