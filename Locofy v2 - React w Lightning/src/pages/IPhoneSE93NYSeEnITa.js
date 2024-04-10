import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AvsnittsHuvud from "../components/AvsnittsHuvud";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./IPhoneSE93NYSeEnITa.module.css";

const IPhoneSE93NYSeEnITa = () => {
  const navigate = useNavigate();

  const onBaktpilIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNejInteDenClick = useCallback(() => {
    navigate("/iphone-se-92-ny-se-en-i-taget-3-steg-1");
  }, [navigate]);

  return (
    <div className={styles.iphoneSe93NySeEnITa}>
      <div className={styles.aktuellAktivitetsfrga}>
        Vill du lägga till denna aktivitet?
      </div>
      <AvsnittsHuvud onBaktpilIconClick={onBaktpilIconClick} />
      <main className={styles.frameParent}>
        <section className={styles.aktivitetsnamnParent}>
          <div className={styles.aktivitetsnamn}>Hoppa hopprep</div>
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
              src="/bildobjekt-xstort1@2x.png"
            />
          </div>
        </section>
        <FrameComponent1 onNejInteDenClick={onNejInteDenClick} />
      </main>
    </div>
  );
};

export default IPhoneSE93NYSeEnITa;
