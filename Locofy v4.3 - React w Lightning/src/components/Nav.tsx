import { FunctionComponent } from "react";
import ButtonBack from "./ButtonBack";
import styles from "./Nav.module.css";

const Nav: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <ButtonBack />
      <h1 className={styles.navtitle}>Mina favoriter</h1>
    </nav>
  );
};

export default Nav;
