import { FunctionComponent } from "react";
import NavHub from "../components/NavHub";
import ButtonLargeWide from "../components/ButtonLargeWide";
import styles from "./MinaFavoriterHubV.module.css";

const MinaFavoriterHubV: FunctionComponent = () => {
  return (
    <div className={styles.minafavoriterhubV5}>
      <NavHub />
      <section className={styles.main}>
        <h2 className={styles.favouritestitle}>
          Hur vill du lägga till aktiviteter?
        </h2>
        <section className={styles.buttoncontainer}>
          <ButtonLargeWide
            buttonLargeWideHref="/minafavoriteroption1-v5"
            choose="Välj från lista"
          />
          <ButtonLargeWide
            buttonLargeWideHref="/minafavoriteroption1-v5"
            choose="Se en aktivitet i taget"
            propWidth="unset"
            propPadding="var(--padding-lg) 3.25rem"
            propWidth1="11.313rem"
            propMinWidth="unset"
          />
          <ButtonLargeWide
            buttonLargeWideHref="/minafavoriteroption1-v5"
            choose="Skapa en egen aktivitet"
            propWidth="unset"
            propPadding="var(--padding-lg) 2.688rem"
            propWidth1="12.5rem"
            propMinWidth="unset"
          />
        </section>
      </section>
    </div>
  );
};

export default MinaFavoriterHubV;
