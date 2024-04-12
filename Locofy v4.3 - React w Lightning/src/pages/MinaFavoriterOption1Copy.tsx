import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import ButtonLargeNarrow from "../components/ButtonLargeNarrow";
import styles from "./MinaFavoriterOption1Copy.module.css";

const MinaFavoriterOption1Copy: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonCloseLargeClick = useCallback(() => {
    navigate("/minafavoriterhub-copy");
  }, [navigate]);

  return (
    <div className={styles.minafavoriteroption1Copy}>
      <nav className={styles.nav}>
        <img className={styles.buttonbackIcon} loading="lazy" alt="" />
        <h1 className={styles.navtitle}>Mina favoriter</h1>
        <button
          className={styles.buttoncloselarge}
          onClick={onButtonCloseLargeClick}
        >
          <img className={styles.vectorIcon} loading="lazy" alt="" />
        </button>
      </nav>
      <main className={styles.main}>
        <h3 className={styles.activitytitle}>
          Vill du lägga till denna aktivitet?
        </h3>
        <Card cardTitle="Cykla" cardImage="216x216x1795939846" />
        <section className={styles.buttoncontainer}>
          <ButtonLargeNarrow nejInteDen="Nej, inte den" />
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

export default MinaFavoriterOption1Copy;
