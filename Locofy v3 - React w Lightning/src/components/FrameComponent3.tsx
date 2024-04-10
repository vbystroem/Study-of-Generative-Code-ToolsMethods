import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/iphone-se-96");
  }, [navigate]);

  return (
    <section className={styles.buttoncontainerWrapper}>
      <div className={styles.buttoncontainer} onClick={onButtonContainerClick}>
        <div className={styles.buttonlargewide}>
          <div className={styles.buttontextlarge}>Välj från lista</div>
        </div>
        <div className={styles.buttonlargewide1}>
          <div className={styles.buttontextlarge1}>Se en aktivitet i taget</div>
        </div>
        <div className={styles.buttonlargewide2}>
          <div className={styles.buttontextlarge2}>Skapa en egen aktivitet</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
