import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AvsnittsHuvud from "../components/AvsnittsHuvud";
import FrameComponent from "../components/FrameComponent";
import styles from "./IPhoneSE90NYLggaTill.module.css";

const IPhoneSE90NYLggaTill = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/iphone-se-92-ny-se-en-i-taget-3-steg-1");
  }, [navigate]);

  return (
    <div className={styles.iphoneSe90NyLggaTill}>
      <AvsnittsHuvud />
      <section className={styles.hurVillDuLggaTillAktivitParent}>
        <div className={styles.hurVillDu}>
          Hur vill du lägga till aktiviteter?
        </div>
        <FrameComponent knapp="Välj från lista" />
        <FrameComponent
          knapp="Se en aktivitet i taget"
          propPadding="0rem var(--padding-16xl) var(--padding-21xl)"
          onButtonContainerClick={onButtonContainerClick}
        />
        <FrameComponent
          knapp="Skapa en egen aktivitet"
          propPadding="0rem var(--padding-16xl)"
        />
      </section>
    </div>
  );
};

export default IPhoneSE90NYLggaTill;
