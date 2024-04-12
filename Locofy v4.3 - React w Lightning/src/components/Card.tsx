import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ButtonSmall from "./ButtonSmall";
import styles from "./Card.module.css";

export type CardType = {
  cardTitle?: string;
  cardImage?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Card: FunctionComponent<CardType> = ({
  cardTitle,
  cardImage,
  propMinWidth,
}) => {
  const cardTitleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <section className={styles.card}>
      <h2 className={styles.cardtitle} style={cardTitleStyle}>
        {cardTitle}
      </h2>
      <img
        className={styles.cardimageIcon}
        loading="lazy"
        alt=""
        src={cardImage}
      />
      <ButtonSmall />
    </section>
  );
};

export default Card;
