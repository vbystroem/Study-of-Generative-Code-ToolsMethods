import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import ButtonLargeNarrow from "../components/ButtonLargeNarrow";
import styles from "./MinaFavoriterOption2Copy.module.css";

const MinaFavoriterOption2Copy: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonCloseLargeImageClick = useCallback(() => {
    navigate("/minafavoriterhub-copy");
  }, [navigate]);

  return (
    <div className={styles.minafavoriteroption2Copy}>
      <nav className={styles.nav}>
        <img className={styles.buttonbackIcon} loading="lazy" alt="" />
        <h1 className={styles.navtitle}>Mina favoriter</h1>
        <img
          className={styles.buttoncloselargeIcon}
          loading="lazy"
          onClick={onButtonCloseLargeImageClick}
        />
      </nav>
      <main className={styles.main}>
        <h3 className={styles.activitytitle}>
          Vill du lägga till denna aktivitet?
        </h3>
        <Card
          cardTitle="Hopprep"
          cardImage="216x216x-348278582"
          propMinWidth="6.25rem"
        />
        <section className={styles.buttoncontainer}>
          <ButtonLargeNarrow
            nejInteDen="Nej, inte den"
            propFlex="1"
            propPadding="var(--padding-base) var(--padding-10xs)"
            propMinWidth="7.5rem"
          />
          <ButtonLargeNarrow
            nejInteDen="Ja, lägg till"
            propFlex="0.85"
            propPadding="var(--padding-base) var(--padding-xs)"
            propMinWidth="6.313rem"
          />
        </section>
      </main>
    </div>
  );
};

export default MinaFavoriterOption2Copy;
