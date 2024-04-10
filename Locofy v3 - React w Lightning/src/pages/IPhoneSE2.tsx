import { FunctionComponent, useState, useCallback } from "react";
import Overlay from "../components/Overlay";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Card from "../components/Card";
import styles from "./IPhoneSE2.module.css";

const IPhoneSE2: FunctionComponent = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const navigate = useNavigate();

  const onXButtonLargeClick = useCallback(() => {
    navigate("/iphone-se-95");
  }, [navigate]);

  const onButtonLargeNarrowContainerClick = useCallback(() => {
    navigate("/iphone-se-96");
  }, [navigate]);

  const openOverlay = useCallback(() => {
    setOverlayOpen(true);
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlayOpen(false);
  }, []);

  return (
    <>
      <div className={styles.iphoneSe97}>
        <Nav
          xButtonLargeIcon
          xButtonLargeIconWidth="unset"
          xButtonLargeIconFlex="1"
          onXButtonLargeClick={onXButtonLargeClick}
        />
        <div className={styles.headingsmallWrapper}>
          <div className={styles.headingsmall}>
            Vill du lägga till denna aktivitet?
          </div>
        </div>
        <section className={styles.card}>
          <Card cardHeading="Hopprep" cardImage="/cardimage1@2x.png" />
        </section>
        <footer className={styles.buttonPairWrapper}>
          <div className={styles.buttonPair}>
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

export default IPhoneSE2;
