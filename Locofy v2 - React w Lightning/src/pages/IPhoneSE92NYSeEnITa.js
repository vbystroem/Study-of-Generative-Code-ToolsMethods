import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AvsnittsHuvud from "../components/AvsnittsHuvud";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./IPhoneSE92NYSeEnITa.module.css";

const IPhoneSE92NYSeEnITa = () => {
  const navigate = useNavigate();

  const onBaktpilIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/iphone-se-93-ny-se-en-i-taget-4-steg-1");
  }, [navigate]);

  return (
    <div className={styles.iphoneSe92NySeEnITa}>
      <div className={styles.aktuellAktivitetsfrga}>
        Vill du lägga till denna aktivitet?
      </div>
      <AvsnittsHuvud onBaktpilIconClick={onBaktpilIconClick} />
      <main className={styles.frameParent}>
        <section className={styles.aktivitetsnamnParent}>
          <div className={styles.aktivitetsnamn}>Cykla</div>
          <div className={styles.buttonWrapper}>
            <div className={styles.button}>
              <div className={styles.buttonChild} />
              <div className={styles.knapp}>Se beskrivning</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.bildobjektXstortIcon}
              loading="lazy"
              alt=""
              src="/bildobjekt-xstort@2x.png"
            />
          </div>
        </section>
        <FrameComponent1 onButtonContainerClick={onButtonContainerClick} />
      </main>
    </div>
  );
};

export default IPhoneSE92NYSeEnITa;
