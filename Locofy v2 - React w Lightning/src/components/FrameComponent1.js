import { useState, useCallback } from "react";
import OverlayAktivitetenTillagdSt from "./OverlayAktivitetenTillagdSt";
import PortalPopup from "./PortalPopup";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ onButtonContainerClick, onNejInteDenClick }) => {
  const [
    isOverlayAktivitetenTillagdStOpen,
    setOverlayAktivitetenTillagdStOpen,
  ] = useState(false);

  const openOverlayAktivitetenTillagdSt = useCallback(() => {
    setOverlayAktivitetenTillagdStOpen(true);
  }, []);

  const closeOverlayAktivitetenTillagdSt = useCallback(() => {
    setOverlayAktivitetenTillagdStOpen(false);
  }, []);

  return (
    <>
      <footer className={styles.frameWrapper}>
        <div className={styles.buttonParent}>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.buttonChild} />
            <div className={styles.knapp} onClick={onNejInteDenClick}>
              Nej, inte den
            </div>
          </div>
          <div
            className={styles.button1}
            onClick={openOverlayAktivitetenTillagdSt}
          >
            <div className={styles.buttonItem} />
            <div className={styles.knapp1}>Ja, lägg till</div>
          </div>
        </div>
      </footer>
      {isOverlayAktivitetenTillagdStOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayAktivitetenTillagdSt}
        >
          <OverlayAktivitetenTillagdSt
            onClose={closeOverlayAktivitetenTillagdSt}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent1;
