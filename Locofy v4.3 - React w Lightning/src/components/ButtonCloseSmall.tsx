import { FunctionComponent } from "react";
import styles from "./ButtonCloseSmall.module.css";

export type ButtonCloseSmallType = {
  onClose?: () => void;
};

const ButtonCloseSmall: FunctionComponent<ButtonCloseSmallType> = ({
  onClose,
}) => {
  return (
    <img
      className={styles.buttonclosesmallIcon}
      loading="lazy"
      alt=""
      onClick={onClose}
    />
  );
};

export default ButtonCloseSmall;
