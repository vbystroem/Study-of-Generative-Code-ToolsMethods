import { FunctionComponent } from "react";
import BackButtonHub from "./BackButtonHub";
import styles from "./NavHub.module.css";

const NavHub: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <BackButtonHub />
      <h1 className={styles.navtitle}>Mina favoriter</h1>
    </nav>
  );
};

export default NavHub;
