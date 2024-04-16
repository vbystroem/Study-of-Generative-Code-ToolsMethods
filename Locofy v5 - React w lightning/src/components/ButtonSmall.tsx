import { FunctionComponent } from "react";
import styles from "./ButtonSmall.module.css";

const ButtonSmall: FunctionComponent = () => {
  return (
    <button className={styles.buttonsmall}>
      <div className={styles.description}>Se beskrivning</div>
    </button>
  );
};

export default ButtonSmall;
