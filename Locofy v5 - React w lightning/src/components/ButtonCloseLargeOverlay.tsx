import { FunctionComponent } from "react";
import styles from "./ButtonCloseLargeOverlay.module.css";

export type ButtonCloseLargeOverlayType = {
  onClose?: () => void;
};

const ButtonCloseLargeOverlay: FunctionComponent<
  ButtonCloseLargeOverlayType
> = ({ onClose }) => {
  return (
    <img
      className={styles.buttoncloselargeIcon}
      loading="lazy"
      alt=""
      src="/buttoncloselarge.svg"
      onClick={onClose}
    />
  );
};

export default ButtonCloseLargeOverlay;
