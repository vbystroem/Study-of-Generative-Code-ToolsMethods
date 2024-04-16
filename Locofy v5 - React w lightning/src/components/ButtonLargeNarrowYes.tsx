import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Link } from "react-router-dom";
import MinaFavoriterConfirmV from "./MinaFavoriterConfirmV";
import PortalPopup from "./PortalPopup";
import styles from "./ButtonLargeNarrowYes.module.css";

export type ButtonLargeNarrowYesType = {
  choiceButton?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propTextAlign?: CSSProperties["textAlign"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propLineHeight?: CSSProperties["lineHeight"];
  propAlignSelf?: CSSProperties["alignSelf"];
  buttonLargeNarrowFlexWrap?: CSSProperties["flexWrap"];
  choiceButtonFlex?: CSSProperties["flex"];
};

const ButtonLargeNarrowYes: FunctionComponent<ButtonLargeNarrowYesType> = ({
  choiceButton,
  propPadding,
  propFlex,
  propFlexDirection,
  propMinWidth,
  propWidth,
  propTextAlign,
  propDisplay,
  propMinWidth1,
  propWidth1,
  propLineHeight,
  propAlignSelf,
  buttonLargeNarrowFlexWrap,
  choiceButtonFlex,
}) => {
  const [isMinaFavoriterConfirmV5Open, setMinaFavoriterConfirmV5Open] =
    useState(false);
  const buttonLargeNarrowStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      flex: propFlex,
      flexDirection: propFlexDirection,
      minWidth: propMinWidth,
      width: propWidth,
      flexWrap: buttonLargeNarrowFlexWrap,
    };
  }, [
    propPadding,
    propFlex,
    propFlexDirection,
    propMinWidth,
    propWidth,
    buttonLargeNarrowFlexWrap,
  ]);

  const choiceButtonStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      display: propDisplay,
      minWidth: propMinWidth1,
      width: propWidth1,
      lineHeight: propLineHeight,
      alignSelf: propAlignSelf,
      flex: choiceButtonFlex,
    };
  }, [
    propTextAlign,
    propDisplay,
    propMinWidth1,
    propWidth1,
    propLineHeight,
    propAlignSelf,
    choiceButtonFlex,
  ]);

  const openMinaFavoriterConfirmV5 = useCallback(() => {
    setMinaFavoriterConfirmV5Open(true);
  }, []);

  const closeMinaFavoriterConfirmV5 = useCallback(() => {
    setMinaFavoriterConfirmV5Open(false);
  }, []);

  return (
    <>
      <Link
        className={styles.buttonlargenarrow}
        to="/minafavoriteroption1-v5"
        onClick={openMinaFavoriterConfirmV5}
        style={buttonLargeNarrowStyle}
      >
        <span className={styles.choicebutton} style={choiceButtonStyle}>
          {choiceButton}
        </span>
      </Link>
      {isMinaFavoriterConfirmV5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMinaFavoriterConfirmV5}
        >
          <MinaFavoriterConfirmV onClose={closeMinaFavoriterConfirmV5} />
        </PortalPopup>
      )}
    </>
  );
};

export default ButtonLargeNarrowYes;
