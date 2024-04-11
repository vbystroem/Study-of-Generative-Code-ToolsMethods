import { FunctionComponent } from "react";
import Overlay1 from "./Overlay1";
import styles from "./Overlay.module.css";

export type OverlayType = {
  onClose?: () => void;
};

const Overlay: FunctionComponent<OverlayType> = ({ onClose }) => {
  return (
    <div className={styles.minafavoriterconfirm}>
      <Overlay1 />
    </div>
  );
};

export default Overlay;
