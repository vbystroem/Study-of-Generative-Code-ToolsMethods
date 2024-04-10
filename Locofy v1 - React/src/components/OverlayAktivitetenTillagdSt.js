import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OverlayAktivitetenTillagdSt.module.css";

const OverlayAktivitetenTillagdSt = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/iphone-se-93-ny-se-en-i-taget-4-steg-1");
  }, [navigate]);

  return (
    <div className={styles.overlayAktivitetenTillagdSt}>
      <div className={styles.overlayAktivitetenTillagdStChild} />
      <img className={styles.stngkryssIcon} alt="" src="/stngkryss.svg" />
      <div className={styles.aktivitetenHarLagts}>
        Aktiviteten har lagts till i dina favoriter
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.buttonChild} />
        <div className={styles.knapp}>Stäng väljaren</div>
      </div>
      <div className={styles.button1} onClick={onButtonContainer1Click}>
        <div className={styles.buttonChild} />
        <div className={styles.knapp}>Se nästa aktivitet</div>
      </div>
    </div>
  );
};

export default OverlayAktivitetenTillagdSt;
