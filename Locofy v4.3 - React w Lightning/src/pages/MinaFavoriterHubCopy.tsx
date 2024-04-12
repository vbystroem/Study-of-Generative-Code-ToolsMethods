import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import ButtonLargeWide from "../components/ButtonLargeWide";
import styles from "./MinaFavoriterHubCopy.module.css";

const MinaFavoriterHubCopy: FunctionComponent = () => {
  return (
    <div className={styles.minafavoriterhubCopy}>
      <Nav />
      <main className={styles.main}>
        <h2 className={styles.favouritestitle}>
          <p className={styles.hurVillDu}>Hur vill du lägga till</p>
          <p className={styles.aktiviteter}>aktiviteter?</p>
        </h2>
        <section className={styles.buttoncontainer}>
          <ButtonLargeWide vljFrnLista="Välj från lista" />
          <ButtonLargeWide
            vljFrnLista="Sen en aktivitet i taget"
            propPadding="var(--padding-xl) var(--padding-17xl)"
            propWidth="unset"
            propFlexDirection="row"
            propMinWidth="18rem"
            propFlex="unset"
            propWidth1="13.313rem"
            propMinWidth1="unset"
            propTextAlign="center"
            propDisplay="flex"
          />
          <ButtonLargeWide
            vljFrnLista="Skapa en egen aktivitet"
            propPadding="var(--padding-xl) 2rem"
            propWidth="unset"
            propFlexDirection="row"
            propMinWidth="18rem"
            propFlex="unset"
            propWidth1="13.875rem"
            propMinWidth1="unset"
            propTextAlign="center"
            propDisplay="flex"
          />
        </section>
      </main>
    </div>
  );
};

export default MinaFavoriterHubCopy;
