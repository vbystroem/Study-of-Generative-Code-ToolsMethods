import { FunctionComponent, useState, useCallback } from 'react';
import Overlay from "../components/Overlay";
import PortalPopup from "../components/PortalPopup";
import {useNavigate} from "react-router-dom";
import Nav from "../components/Nav";
import Card from "../components/Card";
import styles from './IPhoneSE2.module.css';


const IPhoneSE2:FunctionComponent = () => {
const [isMinaFavoriterConfirmOpen, setMinaFavoriterConfirmOpen] = useState(false);
  const navigate = useNavigate();

  const onButtonCloseLargeImageClick = useCallback(() => {
    navigate("/minafavoriterhub");
  }, [navigate]);


  const onButtonLargeNarrowContainerClick = useCallback(() => {
    navigate("/minafavoriteroption1");
  }, [navigate]);


  const openMinaFavoriterConfirm = useCallback(() => {
    setMinaFavoriterConfirmOpen(true);
  }, []);

  const closeMinaFavoriterConfirm = useCallback(() => {
    setMinaFavoriterConfirmOpen(false);
  }, []);

  return (<>
    <div className={styles.minafavoriteroption2}><Nav navTitleMinHeight="3.5rem" propHeight="unset" propAlignSelf="stretch" onButtonCloseLargeClick={onButtonCloseLargeImageClick} navHeight="4.5rem" buttonBackAlignSelf="unset" () => navigate(-1)={() => navigate(-1)} navTitleMargin="unset" />
      <div className={styles.contentArea}>
        <div className={styles.activitytitle}>Vill du lägga till denna aktivitet?</div>
      </div>
      <section className={styles.card}><Card cardTitle="Hopprep" cardImage="/cardimage1@2x.png" buttonSmallHeight="unset" buttonTextHeight="2.5rem" buttonTextWidth="unset" buttonSmallFlex="1" buttonSmallWidth="unset" cardTitleMargin="unset" buttonSmallPadding="unset" />
      </section>
      <footer className={styles.buttonPairWrapper}>
        <div className={styles.buttonPair}>
          <div className={styles.buttonlargenarrow} onClick={onButtonLargeNarrowContainerClick}>
            <div className={styles.buttontext}>Nej, inte den</div>
          </div>
          <div className={styles.buttonlargenarrow1} onClick={openMinaFavoriterConfirm}>
            <div className={styles.buttontext1}>Ja, lägg till</div>
          </div>
        </div>
      </footer>
    </div>
{isMinaFavoriterConfirmOpen && (
          <PortalPopup
             overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            
            
            
            
            
             onOutsideClick={closeMinaFavoriterConfirm}
            >
            <Overlay onClose={closeMinaFavoriterConfirm} />
          </PortalPopup>
        )}</>);
};

export default IPhoneSE2;
