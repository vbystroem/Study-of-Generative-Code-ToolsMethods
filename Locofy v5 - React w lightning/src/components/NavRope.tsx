import { FunctionComponent } from "react";
import BackButtonRope from "./BackButtonRope";
import ButtonCloseLargeRope from "./ButtonCloseLargeRope";
import styles from "./NavRope.module.css";

const NavRope: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <BackButtonRope />
      <h1 className={styles.navtitle}>Mina favoriter</h1>
      <ButtonCloseLargeRope />
    </nav>
  );
};

export default NavRope;
