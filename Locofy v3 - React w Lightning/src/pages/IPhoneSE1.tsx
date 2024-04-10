import { FunctionComponent, useState, useCallback } from "react";
import Overlay from "../components/Overlay";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Card from "../components/Card";
import styles from "./IPhoneSE1.module.css";

const IPhoneSE1: FunctionComponent = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const navigate = useNavigate();

  const onXButtonLargeClick = useCallback(() => {
    navigate("/iphone-se-95");
  }, [navigate]);

  const onButtonLargeNarrowContainerClick = useCallback(() => {
    navigate("/iphone-se-97");
  }, [navigate]);

  const openOverlay = useCallback(() => {
    setOverlayOpen(true);
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlayOpen(false);
  }, []);

  return (
    <>
      <div className={styles.iphoneSe96}>
        <Nav
          xButtonLargeIcon
          xButtonLargeIconWidth="unset"
          xButtonLargeIconFlex="1"
          onXButtonLargeClick={onXButtonLargeClick}
        />
        <div className={styles.xButtonLarge}>
          <div className={styles.headingsmall}>
            Vill du lägga till denna aktivitet?
          </div>
        </div>
        <section className={styles.card}>
          <Card cardHeading="Cykla" cardImage="/cardimage@2x.png" />
        </section>
        <footer className={styles.iphoneSe96Inner}>
          <div className={styles.buttonlargenarrowParent}>
            <div
              className={styles.buttonlargenarrow}
              onClick={onButtonLargeNarrowContainerClick}
            >
              <div className={styles.buttontextlarge}>Nej, inte den</div>
            </div>
            <div className={styles.buttonlargenarrow1} onClick={openOverlay}>
              <div className={styles.buttontextlarge1}>Ja, lägg till</div>
            </div>
          </div>
        </footer>
      </div>
      {isOverlayOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlay}
        >
          <Overlay onClose={closeOverlay} />
        </PortalPopup>
      )}
    </>
  );
};

export default IPhoneSE1;
