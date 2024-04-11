import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./IPhoneSE.module.css";

const IPhoneSE: FunctionComponent = () => {
  return (
    <div className={styles.minafavoriterhub}>
      <header className={styles.nav}>
        <img
          className={styles.buttonbackIcon}
          loading="lazy"
          alt=""
          src="/backtick.svg"
        />
        <div className={styles.navtitle}>Mina favoriter</div>
      </header>
      <div className={styles.favoritesArea}>
        <div className={styles.favouritestitle}>
          Hur vill du lägga till aktiviteter?
        </div>
      </div>
      <FrameComponent3 />
    </div>
  );
};

export default IPhoneSE;
