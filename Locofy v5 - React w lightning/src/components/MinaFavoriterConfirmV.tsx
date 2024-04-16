import { FunctionComponent, useCallback } from "react";
import {} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonCloseLargeOverlay from "./ButtonCloseLargeOverlay";
import ButtonLargeNarrow from "./ButtonLargeNarrow";
import styles from "./MinaFavoriterConfirmV.module.css";

export type MinaFavoriterConfirmVType = {
  onClose?: () => void;
};

const MinaFavoriterConfirmV: FunctionComponent<MinaFavoriterConfirmVType> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const onButtonLargeNarrowClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonLargeNarrow2Click = useCallback(() => {
    navigate("/minafavoriteroption2-v5");
  }, [navigate]);

  return (
    <div className={styles.minafavoriterconfirmV5}>
      <section className={styles.overlay}>
        <div className={styles.overlayclosenav}>
          <ButtonCloseLargeOverlay />
        </div>
        <h2 className={styles.overlayheading}>
          Aktiviteten har lagts till i dina favoriter
        </h2>
        <section className={styles.overlaybuttoncontainer}>
          <ButtonLargeNarrow
            choiceButton="Stäng väljaren"
            onButtonLargeNarrowClick={onButtonLargeNarrowClick}
          />
          <ButtonLargeNarrow
            choiceButton="Se nästa aktivitet"
            propAlignSelf="stretch"
            onButtonLargeNarrowClick={onButtonLargeNarrow2Click}
          />
        </section>
      </section>
    </div>
  );
};

export default MinaFavoriterConfirmV;
