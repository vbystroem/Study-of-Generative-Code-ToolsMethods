import { FunctionComponent, useCallback } from "react";
import {} from "@mui/material";
import ButtonCloseSmall from "./ButtonCloseSmall";
import { useNavigate } from "react-router-dom";
import styles from "./MinaFavoriterConfirmCopy.module.css";

export type MinaFavoriterConfirmCopyType = {
  onClose?: () => void;
};

const MinaFavoriterConfirmCopy: FunctionComponent<
  MinaFavoriterConfirmCopyType
> = ({ onClose }) => {
  const navigate = useNavigate();

  const onButtonLargeNarrow1Click = useCallback(() => {
    navigate("/minafavoriteroption2-copy");
  }, [navigate]);

  return (
    <div className={styles.minafavoriterconfirmCopy}>
      <section className={styles.overlay}>
        <div className={styles.overlayclosenav}>
          <ButtonCloseSmall />
        </div>
        <h2 className={styles.aktivitetenHarLagtsContainer}>
          <span className={styles.aktivitetenHarLagtsContainer1}>
            <p className={styles.aktivitetenHar}>{`Aktiviteten har `}</p>
            <p className={styles.lagtsTillI}>{`lagts till i dina `}</p>
            <p className={styles.favoriter}>favoriter</p>
          </span>
        </h2>
        <section className={styles.overlaybuttoncontainer}>
          <button className={styles.buttonlargenarrow} onClick={onClose}>
            <span className={styles.nejInteDen}>Stäng</span>
          </button>
          <button
            className={styles.buttonlargenarrow1}
            onClick={onButtonLargeNarrow1Click}
          >
            <span className={styles.nejInteDen1}>Se nästa</span>
          </button>
        </section>
      </section>
    </div>
  );
};

export default MinaFavoriterConfirmCopy;
