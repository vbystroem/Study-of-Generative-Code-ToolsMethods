import { useState, useCallback } from "react";
import OverlayAktivitetenTillagdSt from "../components/OverlayAktivitetenTillagdSt";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./IPhoneSE92NYSeEnITa.module.css";

const IPhoneSE92NYSeEnITa = () => {
  const [
    isOverlayAktivitetenTillagdStOpen,
    setOverlayAktivitetenTillagdStOpen,
  ] = useState(false);
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/iphone-se-93-ny-se-en-i-taget-4-steg-1");
  }, [navigate]);

  const openOverlayAktivitetenTillagdSt = useCallback(() => {
    setOverlayAktivitetenTillagdStOpen(true);
  }, []);

  const closeOverlayAktivitetenTillagdSt = useCallback(() => {
    setOverlayAktivitetenTillagdStOpen(false);
  }, []);

  const onBaktpilIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.iphoneSe92NySeEnITa}>
        <div className={styles.aktivitetsfrslag}>
          <div className={styles.aktuellAktivitetsfrga}>
            Vill du lägga till denna aktivitet?
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.buttonChild} />
            <div className={styles.knapp}>Nej, inte den</div>
          </div>
          <div
            className={styles.button1}
            onClick={openOverlayAktivitetenTillagdSt}
          >
            <div className={styles.buttonChild} />
            <div className={styles.knapp}>Ja, lägg till</div>
          </div>
          <div className={styles.aktivitet}>
            <div className={styles.aktivitetChild} />
            <div className={styles.aktivitetsnamn}>Cykla</div>
            <div className={styles.button2}>
              <div className={styles.buttonChild} />
              <div className={styles.knapp2}>Se beskrivning</div>
            </div>
            <img
              className={styles.bildobjektXstortIcon}
              alt=""
              src="/bildobjekt-xstort@2x.png"
            />
          </div>
          <div className={styles.avsnittshuvud}>
            <div className={styles.avsnittshuvudChild} />
            <img
              className={styles.baktpilIcon}
              alt=""
              src="/baktpil.svg"
              onClick={onBaktpilIconClick}
            />
            <div className={styles.avsnittsrubrik}>Mina favoriter</div>
            <img className={styles.stngkryssIcon} alt="" src="/stngkryss.svg" />
          </div>
        </div>
      </div>
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

export default IPhoneSE92NYSeEnITa;
