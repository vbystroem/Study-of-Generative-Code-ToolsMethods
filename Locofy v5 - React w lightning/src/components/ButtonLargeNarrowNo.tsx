import { FunctionComponent } from "react";
import styles from "./ButtonLargeNarrowNo.module.css";

export type ButtonLargeNarrowNoType = {
  /** Action props */
  onButtonLargeNarrowClick?: () => void;
};

const ButtonLargeNarrowNo: FunctionComponent<ButtonLargeNarrowNoType> = ({
  onButtonLargeNarrowClick,
}) => {
  return (
    <a className={styles.buttonlargenarrow} onClick={onButtonLargeNarrowClick}>
      <span className={styles.choicebutton}>Nej, inte den</span>
    </a>
  );
};

export default ButtonLargeNarrowNo;
