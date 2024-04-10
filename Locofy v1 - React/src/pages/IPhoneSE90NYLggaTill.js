import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhoneSE90NYLggaTill.module.css";

const IPhoneSE90NYLggaTill = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/iphone-se-92-ny-se-en-i-taget-3-steg-1");
  }, [navigate]);

  return (
    <div className={styles.iphoneSe90NyLggaTill}>
      <div className={styles.hurVillDu}>
        Hur vill du lägga till aktiviteter?
      </div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.knapp}>Välj från lista</div>
      </div>
      <div className={styles.button1} onClick={onButtonContainer1Click}>
        <div className={styles.buttonChild} />
        <div className={styles.knapp}>Se en aktivitet i taget</div>
      </div>
      <div className={styles.button2}>
        <div className={styles.buttonChild} />
        <div className={styles.knapp}>Skapa en egen aktivitet</div>
      </div>
      <div className={styles.avsnittshuvud}>
        <div className={styles.avsnittshuvudChild} />
        <img className={styles.baktpilIcon} alt="" src="/baktpil.svg" />
        <div className={styles.avsnittsrubrik}>Mina favoriter</div>
        <img className={styles.stngkryssIcon} alt="" src="/stngkryss.svg" />
      </div>
    </div>
  );
};

export default IPhoneSE90NYLggaTill;
