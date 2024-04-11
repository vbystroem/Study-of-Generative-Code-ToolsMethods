import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/minafavoriteroption1");
  }, [navigate]);

  return (
    <section className={styles.buttonContainer}>
      <div className={styles.buttoncontainer} onClick={onButtonContainer1Click}>
        <div className={styles.buttonlargewide}>
          <div className={styles.buttontext}>Välj från lista</div>
        </div>
        <div className={styles.buttonlargewide1}>
          <div className={styles.buttontext1}>Se en aktivitet i taget</div>
        </div>
        <div className={styles.buttonlargewide2}>
          <div className={styles.buttontext2}>Skapa en egen aktivitet</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
