import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card1.module.css";

export type Card1Type = {
  cardTitle?: string;
  cardImage?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Card1: FunctionComponent<Card1Type> = ({
  cardTitle,
  cardImage,
  propMinWidth,
}) => {
  const cardTitle1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <section className={styles.card}>
      <div className={styles.cardtitle} style={cardTitle1Style}>
        {cardTitle}
      </div>
      <img
        className={styles.cardimageIcon}
        loading="lazy"
        alt=""
        src={cardImage}
      />
      <button className={styles.buttonsmall}>
        <div className={styles.seBeskrivning}>Se beskrivning</div>
      </button>
    </section>
  );
};

export default Card1;
