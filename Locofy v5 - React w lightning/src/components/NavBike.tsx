import { FunctionComponent } from "react";
import BackButtonBike from "./BackButtonBike";
import ButtonCloseLargeBike from "./ButtonCloseLargeBike";
import styles from "./NavBike.module.css";

const NavBike: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <BackButtonBike />
      <h1 className={styles.navtitle}>Mina favoriter</h1>
      <ButtonCloseLargeBike />
    </nav>
  );
};

export default NavBike;
