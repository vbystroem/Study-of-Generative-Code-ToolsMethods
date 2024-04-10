import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/iphone-se-93-ny-se-en-i-taget-4-steg-1");
  }, [navigate]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.buttonParent}>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.buttonChild} />
          <div className={styles.knapp}>Stäng väljaren</div>
        </div>
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <div className={styles.buttonItem} />
          <div className={styles.knapp1}>Se nästa aktivitet</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
