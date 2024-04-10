import { FunctionComponent } from "react";
import styles from "./Card.module.css";

export type CardType = {
  cardHeading?: string;
  cardImage?: string;
};

const Card: FunctionComponent<CardType> = ({ cardHeading, cardImage }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardheading}>{cardHeading}</div>
      <div className={styles.buttonSmall}>
        <img
          className={styles.cardimageIcon}
          loading="lazy"
          alt=""
          src={cardImage}
        />
      </div>
      <div className={styles.minaFavoriter}>
        <div className={styles.buttonsmall}>
          <div className={styles.backtickXButton}>Se beskrivning</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
