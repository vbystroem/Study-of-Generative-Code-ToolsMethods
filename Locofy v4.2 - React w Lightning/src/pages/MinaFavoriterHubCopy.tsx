import { FunctionComponent } from "react";
import Main from "../components/Main";
import styles from "./MinaFavoriterHubCopy.module.css";

const MinaFavoriterHubCopy: FunctionComponent = () => {
  return (
    <div className={styles.minafavoriterhubCopy}>
      <header className={styles.nav}>
        <img
          className={styles.buttonbackIcon}
          loading="lazy"
          alt=""
          src="/backtick.svg"
        />
        <div className={styles.navtitle}>Mina favoriter</div>
      </header>
      <Main />
    </div>
  );
};

export default MinaFavoriterHubCopy;
