import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card.module.css";

export type CardType = {
  cardTitle?: string;
  cardImage?: string;

  /** Style props */
  buttonSmallHeight?: CSSProperties["height"];
  buttonTextHeight?: CSSProperties["height"];
  buttonTextWidth?: CSSProperties["width"];
  buttonSmallFlex?: CSSProperties["flex"];
  buttonSmallWidth?: CSSProperties["width"];
  cardTitleMargin?: CSSProperties["margin"];
  buttonSmallPadding?: CSSProperties["padding"];
};

const Card: FunctionComponent<CardType> = ({
  cardTitle,
  cardImage,
  buttonSmallHeight,
  buttonTextHeight,
  buttonTextWidth,
  buttonSmallFlex,
  buttonSmallWidth,
  cardTitleMargin,
  buttonSmallPadding,
}) => {
  const buttonSmallStyle: CSSProperties = useMemo(() => {
    return {
      height: buttonSmallHeight,
      flex: buttonSmallFlex,
      width: buttonSmallWidth,
      padding: buttonSmallPadding,
    };
  }, [
    buttonSmallHeight,
    buttonSmallFlex,
    buttonSmallWidth,
    buttonSmallPadding,
  ]);

  const buttonTextStyle: CSSProperties = useMemo(() => {
    return {
      height: buttonTextHeight,
      width: buttonTextWidth,
    };
  }, [buttonTextHeight, buttonTextWidth]);

  const cardTitleStyle: CSSProperties = useMemo(() => {
    return {
      margin: cardTitleMargin,
    };
  }, [cardTitleMargin]);

  return (
    <div className={styles.card}>
      <h2 className={styles.cardtitle} style={cardTitleStyle}>
        {cardTitle}
      </h2>
      <div className={styles.imageContainer}>
        <img
          className={styles.cardimageIcon}
          loading="lazy"
          alt=""
          src={cardImage}
        />
      </div>
      <div className={styles.minaFavoriter}>
        <button className={styles.buttonsmall} style={buttonSmallStyle}>
          <div className={styles.buttontext} style={buttonTextStyle}>
            Se beskrivning
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
