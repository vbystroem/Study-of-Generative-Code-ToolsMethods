import { FunctionComponent } from "react";
import styles from "./ButtonSmall.module.css";

const ButtonSmall: FunctionComponent = () => {
  return (
    <button className={styles.buttonsmall}>
      <span className={styles.seBeskrivning}>Se beskrivning</span>
    </button>
  );
};

export default ButtonSmall;
