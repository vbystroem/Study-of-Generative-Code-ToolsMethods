import { FunctionComponent } from "react";
import styles from "./Nav1.module.css";

export type Nav1Type = {
  /** Action props */
  onButtonCloseLargeClick?: () => void;
};

const Nav1: FunctionComponent<Nav1Type> = ({ onButtonCloseLargeClick }) => {
  return (
    <header className={styles.nav}>
      <img
        className={styles.buttonbackIcon}
        loading="lazy"
        alt=""
        src="/buttonback.svg"
      />
      <div className={styles.navtitle}>Mina favoriter</div>
      <img
        className={styles.buttoncloselargeIcon}
        loading="lazy"
        alt=""
        src="/buttoncloselarge.svg"
        onClick={onButtonCloseLargeClick}
      />
    </header>
  );
};

export default Nav1;
