import { FunctionComponent, useState, useCallback } from "react";
import MinaFavoriterConfirmCopy from "../components/MinaFavoriterConfirmCopy";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Nav1 from "../components/Nav1";
import Card1 from "../components/Card1";
import styles from "./MinaFavoriterOption2Copy.module.css";

const MinaFavoriterOption2Copy: FunctionComponent = () => {
  const [isMinaFavoriterConfirmCopyOpen, setMinaFavoriterConfirmCopyOpen] =
    useState(false);
  const navigate = useNavigate();

  const onButtonCloseLargeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonLargeNarrowContainerClick = useCallback(() => {
    navigate("/minafavoriteroption1");
  }, [navigate]);

  const openMinaFavoriterConfirmCopy = useCallback(() => {
    setMinaFavoriterConfirmCopyOpen(true);
  }, []);

  const closeMinaFavoriterConfirmCopy = useCallback(() => {
    setMinaFavoriterConfirmCopyOpen(false);
  }, []);

  return (
    <>
      <div className={styles.minafavoriteroption2Copy}>
        <Nav1 onButtonCloseLargeClick={onButtonCloseLargeClick} />
        <main className={styles.main}>
          <div className={styles.activitytitle}>
            Vill du lägga till denna aktivitet?
          </div>
          <Card1
            cardTitle="Hopprep"
            cardImage="/cardimage1@2x.png"
            propMinWidth="6.25rem"
          />
          <footer className={styles.buttoncontainer}>
            <div
              className={styles.buttonlargenarrow}
              onClick={onButtonLargeNarrowContainerClick}
            >
              <div className={styles.nejInteDen}>Nej, inte den</div>
            </div>
            <div
              className={styles.buttonlargenarrow1}
              onClick={openMinaFavoriterConfirmCopy}
            >
              <div className={styles.nejInteDen1}>Ja, lägg till</div>
            </div>
          </footer>
        </main>
      </div>
      {isMinaFavoriterConfirmCopyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMinaFavoriterConfirmCopy}
        >
          <MinaFavoriterConfirmCopy onClose={closeMinaFavoriterConfirmCopy} />
        </PortalPopup>
      )}
    </>
  );
};

export default MinaFavoriterOption2Copy;
