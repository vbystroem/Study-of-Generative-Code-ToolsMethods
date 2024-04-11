import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Main: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/minafavoriteroption1");
  }, [navigate]);

  return (
    <section className={styles.main}>
      <div className={styles.favouritestitle}>
        <p className={styles.hurVillDu}>Hur vill du lägga till</p>
        <p className={styles.aktiviteter}>aktiviteter?</p>
      </div>
      <div className={styles.buttoncontainer} onClick={onButtonContainerClick}>
        <button className={styles.buttonlargewide}>
          <div className={styles.vljFrnLista}>Välj från lista</div>
        </button>
        <button className={styles.buttonlargewide1}>
          <div className={styles.vljFrnLista1}>Sen en aktivitet i taget</div>
        </button>
        <button className={styles.buttonlargewide2}>
          <div className={styles.vljFrnLista2}>Skapa en egen aktivitet</div>
        </button>
      </div>
    </section>
  );
};

export default Main;
