import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ knapp, propPadding, onButtonContainerClick }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.buttonWrapper} style={frameDivStyle}>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.buttonChild} />
        <div className={styles.knapp}>{knapp}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
