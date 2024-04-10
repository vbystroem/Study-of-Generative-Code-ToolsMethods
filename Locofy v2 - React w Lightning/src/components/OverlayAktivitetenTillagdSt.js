import FrameComponent2 from "./FrameComponent2";
import styles from "./OverlayAktivitetenTillagdSt.module.css";

const OverlayAktivitetenTillagdSt = ({ onClose }) => {
  return (
    <div className={styles.overlayAktivitetenTillagdSt}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.stngkryssParent}>
          <img
            className={styles.stngkryssIcon}
            loading="lazy"
            alt=""
            src="/stngkryss1.svg"
          />
          <h2 className={styles.aktivitetenHarLagts}>
            Aktiviteten har lagts till i dina favoriter
          </h2>
        </div>
        <FrameComponent2 />
      </section>
    </div>
  );
};

export default OverlayAktivitetenTillagdSt;
