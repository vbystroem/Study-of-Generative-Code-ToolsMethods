import { FunctionComponent, useState, useCallback } from 'react';
import Overlay from "../components/Overlay";
import PortalPopup from "../components/PortalPopup";
import {useNavigate} from "react-router-dom";
import Nav from "../components/Nav";
import Card from "../components/Card";
import styles from './IPhoneSE1.module.css';


const IPhoneSE1:FunctionComponent = () => {
const [isMinaFavoriterConfirmOpen, setMinaFavoriterConfirmOpen] = useState(false);
  const navigate = useNavigate();

  const onButtonCloseLargeClick = useCallback(() => {
    navigate("/minafavoriterhub");
  }, [navigate]);


  const onButtonLargeNarrowClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


  const openMinaFavoriterConfirm = useCallback(() => {
    setMinaFavoriterConfirmOpen(true);
  }, []);

  const closeMinaFavoriterConfirm = useCallback(() => {
    setMinaFavoriterConfirmOpen(false);
  }, []);

  return (<>
    <div className={styles.minafavoriteroption1}><Nav onButtonCloseLargeClick={onButtonCloseLargeClick} () => navigate(-1)={() => navigate(-1)} />
      <div className={styles.activitytitleWrapper}>
        <h3 className={styles.activitytitle}>Vill du lägga till denna aktivitet?</h3>
      </div>
      <section className={styles.cardWrapper}><Card cardTitle="Cykla" cardImage="/cardimage@2x.png" />
      </section>
      <section className={styles.minafavoriteroption1Inner}>
        <div className={styles.buttonlargenarrowParent}>
          <button className={styles.buttonlargenarrow} onClick={onButtonLargeNarrowClick}>
            <div className={styles.buttontext}>Nej, inte den</div>
          </button>
          <button className={styles.buttonlargenarrow1} onClick={openMinaFavoriterConfirm}>
            <div className={styles.buttontext1}>Ja, lägg till</div>
          </button>
        </div>
      </section>
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

export default IPhoneSE1;
