import { FunctionComponent } from "react";
import styles from "./BackButtonHub.module.css";

const BackButtonHub: FunctionComponent = () => {
  return (
    <img
      className={styles.buttonIcon}
      loading="lazy"
      alt=""
      src="/button.svg"
    />
  );
};

export default BackButtonHub;
