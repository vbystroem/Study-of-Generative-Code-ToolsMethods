import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Overlay1.module.css";

const Overlay1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonLargeNarrowContainerClick = useCallback(() => {
    navigate("/iphone-se-97");
  }, [navigate]);

  return (
    <section className={styles.overlay}>
      <div className={styles.overlayclosenav}>
        <img
          className={styles.xbuttonsmallIcon}
          loading="lazy"
          alt=""
          src="/xbuttonsmall.svg"
        />
      </div>
      <div className={styles.headingLarge}>
        <h2 className={styles.headinglarge}>
          Aktiviteten har lagts till i dina favoriter
        </h2>
      </div>
      <div className={styles.overlaybuttoncontainer}>
        <div
          className={styles.buttonlargenarrow}
          onClick={onButtonLargeNarrowContainerClick}
        >
          <div className={styles.buttontextlarge}>Se nästa</div>
        </div>
        <div className={styles.buttonlargenarrow1}>
          <div className={styles.buttontextlarge1}>Stäng</div>
        </div>
      </div>
    </section>
  );
};

export default Overlay1;
