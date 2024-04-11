import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Overlay.module.css";

export type OverlayType = {
  confirmationText?: string;

  /** Style props */
  overlayGap?: CSSProperties["gap"];
  overlayMinWidth?: CSSProperties["minWidth"];
  overlayMinHeight?: CSSProperties["minHeight"];
  overlayCloseNavWidth?: CSSProperties["width"];
  overlayCloseNavAlignSelf?: CSSProperties["alignSelf"];
  overlayCloseNavPadding?: CSSProperties["padding"];
  confirmationTextWidth?: CSSProperties["width"];
  confirmationTextHeight?: CSSProperties["height"];
  overlayButtonContainerOverflow?: CSSProperties["overflow"];
  overlayButtonContainerDisplay?: CSSProperties["display"];
  overlayButtonContainerFlexDirection?: CSSProperties["flexDirection"];
  overlayButtonContainerPadding?: CSSProperties["padding"];
  overlayButtonContainerGap?: CSSProperties["gap"];
  overlayButtonContainerWidth?: CSSProperties["width"];
  buttonLargeNarrowWidth?: CSSProperties["width"];
  buttonLargeNarrowPosition?: CSSProperties["position"];
  buttonLargeNarrowBorderRadius?: CSSProperties["borderRadius"];
  buttonLargeNarrowBackgroundColor?: CSSProperties["backgroundColor"];
  buttonLargeNarrowBoxShadow?: CSSProperties["boxShadow"];
  buttonLargeNarrowBorder?: CSSProperties["border"];
  buttonLargeNarrowHeight?: CSSProperties["height"];
  buttonLargeNarrowMargin?: CSSProperties["margin"];
  buttonTextLargePosition?: CSSProperties["position"];
  buttonTextLargeHeight?: CSSProperties["height"];
  buttonTextLargeWidth?: CSSProperties["width"];
  buttonTextLargeTop?: CSSProperties["top"];
  buttonTextLargeLeft?: CSSProperties["left"];
  buttonTextLargeFontSize?: CSSProperties["fontSize"];
  buttonTextLargeFontFamily?: CSSProperties["fontFamily"];
  buttonTextLargeColor?: CSSProperties["color"];
  buttonTextLargeTextAlign?: CSSProperties["textAlign"];
  buttonTextLargeDisplay?: CSSProperties["display"];
  buttonLargeNarrowWidth1?: CSSProperties["width"];
  buttonLargeNarrowPosition1?: CSSProperties["position"];
  buttonLargeNarrowBorderRadius1?: CSSProperties["borderRadius"];
  buttonLargeNarrowBackgroundColor1?: CSSProperties["backgroundColor"];
  buttonLargeNarrowBoxShadow1?: CSSProperties["boxShadow"];
  buttonLargeNarrowBorder1?: CSSProperties["border"];
  buttonLargeNarrowHeight1?: CSSProperties["height"];
  buttonLargeNarrowMargin1?: CSSProperties["margin"];
  buttonTextLargePosition1?: CSSProperties["position"];
  buttonTextLargeHeight1?: CSSProperties["height"];
  buttonTextLargeWidth1?: CSSProperties["width"];
  buttonTextLargeTop1?: CSSProperties["top"];
  buttonTextLargeLeft1?: CSSProperties["left"];
  buttonTextLargeFontSize1?: CSSProperties["fontSize"];
  buttonTextLargeFontFamily1?: CSSProperties["fontFamily"];
  buttonTextLargeColor1?: CSSProperties["color"];
  buttonTextLargeTextAlign1?: CSSProperties["textAlign"];
  buttonTextLargeDisplay1?: CSSProperties["display"];
};

const Overlay: FunctionComponent<OverlayType> = ({
  confirmationText,
  overlayGap,
  overlayMinWidth,
  overlayMinHeight,
  overlayCloseNavWidth,
  overlayCloseNavAlignSelf,
  overlayCloseNavPadding,
  confirmationTextWidth,
  confirmationTextHeight,
  overlayButtonContainerOverflow,
  overlayButtonContainerDisplay,
  overlayButtonContainerFlexDirection,
  overlayButtonContainerPadding,
  overlayButtonContainerGap,
  overlayButtonContainerWidth,
  buttonLargeNarrowWidth,
  buttonLargeNarrowPosition,
  buttonLargeNarrowBorderRadius,
  buttonLargeNarrowBackgroundColor,
  buttonLargeNarrowBoxShadow,
  buttonLargeNarrowBorder,
  buttonLargeNarrowHeight,
  buttonLargeNarrowMargin,
  buttonTextLargePosition,
  buttonTextLargeHeight,
  buttonTextLargeWidth,
  buttonTextLargeTop,
  buttonTextLargeLeft,
  buttonTextLargeFontSize,
  buttonTextLargeFontFamily,
  buttonTextLargeColor,
  buttonTextLargeTextAlign,
  buttonTextLargeDisplay,
  buttonLargeNarrowWidth1,
  buttonLargeNarrowPosition1,
  buttonLargeNarrowBorderRadius1,
  buttonLargeNarrowBackgroundColor1,
  buttonLargeNarrowBoxShadow1,
  buttonLargeNarrowBorder1,
  buttonLargeNarrowHeight1,
  buttonLargeNarrowMargin1,
  buttonTextLargePosition1,
  buttonTextLargeHeight1,
  buttonTextLargeWidth1,
  buttonTextLargeTop1,
  buttonTextLargeLeft1,
  buttonTextLargeFontSize1,
  buttonTextLargeFontFamily1,
  buttonTextLargeColor1,
  buttonTextLargeTextAlign1,
  buttonTextLargeDisplay1,
}) => {
  const overlayStyle: CSSProperties = useMemo(() => {
    return {
      gap: overlayGap,
      minWidth: overlayMinWidth,
      minHeight: overlayMinHeight,
    };
  }, [overlayGap, overlayMinWidth, overlayMinHeight]);

  const overlayCloseNavStyle: CSSProperties = useMemo(() => {
    return {
      width: overlayCloseNavWidth,
      alignSelf: overlayCloseNavAlignSelf,
      padding: overlayCloseNavPadding,
    };
  }, [overlayCloseNavWidth, overlayCloseNavAlignSelf, overlayCloseNavPadding]);

  const confirmationTextStyle: CSSProperties = useMemo(() => {
    return {
      width: confirmationTextWidth,
      height: confirmationTextHeight,
    };
  }, [confirmationTextWidth, confirmationTextHeight]);

  const overlayButtonContainerStyle: CSSProperties = useMemo(() => {
    return {
      overflow: overlayButtonContainerOverflow,
      display: overlayButtonContainerDisplay,
      flexDirection: overlayButtonContainerFlexDirection,
      padding: overlayButtonContainerPadding,
      gap: overlayButtonContainerGap,
      width: overlayButtonContainerWidth,
    };
  }, [
    overlayButtonContainerOverflow,
    overlayButtonContainerDisplay,
    overlayButtonContainerFlexDirection,
    overlayButtonContainerPadding,
    overlayButtonContainerGap,
    overlayButtonContainerWidth,
  ]);

  const buttonLargeNarrowStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonLargeNarrowWidth,
      position: buttonLargeNarrowPosition,
      borderRadius: buttonLargeNarrowBorderRadius,
      backgroundColor: buttonLargeNarrowBackgroundColor,
      boxShadow: buttonLargeNarrowBoxShadow,
      border: buttonLargeNarrowBorder,
      height: buttonLargeNarrowHeight,
      margin: buttonLargeNarrowMargin,
    };
  }, [
    buttonLargeNarrowWidth,
    buttonLargeNarrowPosition,
    buttonLargeNarrowBorderRadius,
    buttonLargeNarrowBackgroundColor,
    buttonLargeNarrowBoxShadow,
    buttonLargeNarrowBorder,
    buttonLargeNarrowHeight,
    buttonLargeNarrowMargin,
  ]);

  const buttonTextLargeStyle: CSSProperties = useMemo(() => {
    return {
      position: buttonTextLargePosition,
      height: buttonTextLargeHeight,
      width: buttonTextLargeWidth,
      top: buttonTextLargeTop,
      left: buttonTextLargeLeft,
      fontSize: buttonTextLargeFontSize,
      fontFamily: buttonTextLargeFontFamily,
      color: buttonTextLargeColor,
      textAlign: buttonTextLargeTextAlign,
      display: buttonTextLargeDisplay,
    };
  }, [
    buttonTextLargePosition,
    buttonTextLargeHeight,
    buttonTextLargeWidth,
    buttonTextLargeTop,
    buttonTextLargeLeft,
    buttonTextLargeFontSize,
    buttonTextLargeFontFamily,
    buttonTextLargeColor,
    buttonTextLargeTextAlign,
    buttonTextLargeDisplay,
  ]);

  const buttonLargeNarrow1Style: CSSProperties = useMemo(() => {
    return {
      width: buttonLargeNarrowWidth1,
      position: buttonLargeNarrowPosition1,
      borderRadius: buttonLargeNarrowBorderRadius1,
      backgroundColor: buttonLargeNarrowBackgroundColor1,
      boxShadow: buttonLargeNarrowBoxShadow1,
      border: buttonLargeNarrowBorder1,
      height: buttonLargeNarrowHeight1,
      margin: buttonLargeNarrowMargin1,
    };
  }, [
    buttonLargeNarrowWidth1,
    buttonLargeNarrowPosition1,
    buttonLargeNarrowBorderRadius1,
    buttonLargeNarrowBackgroundColor1,
    buttonLargeNarrowBoxShadow1,
    buttonLargeNarrowBorder1,
    buttonLargeNarrowHeight1,
    buttonLargeNarrowMargin1,
  ]);

  const buttonTextLarge1Style: CSSProperties = useMemo(() => {
    return {
      position: buttonTextLargePosition1,
      height: buttonTextLargeHeight1,
      width: buttonTextLargeWidth1,
      top: buttonTextLargeTop1,
      left: buttonTextLargeLeft1,
      fontSize: buttonTextLargeFontSize1,
      fontFamily: buttonTextLargeFontFamily1,
      color: buttonTextLargeColor1,
      textAlign: buttonTextLargeTextAlign1,
      display: buttonTextLargeDisplay1,
    };
  }, [
    buttonTextLargePosition1,
    buttonTextLargeHeight1,
    buttonTextLargeWidth1,
    buttonTextLargeTop1,
    buttonTextLargeLeft1,
    buttonTextLargeFontSize1,
    buttonTextLargeFontFamily1,
    buttonTextLargeColor1,
    buttonTextLargeTextAlign1,
    buttonTextLargeDisplay1,
  ]);

  return (
    <div className={styles.overlay} style={overlayStyle}>
      <div className={styles.overlayclosenav} style={overlayCloseNavStyle}>
        <img
          className={styles.buttonclosesmallIcon}
          alt=""
          src="/xbuttonsmall.svg"
        />
      </div>
      <div className={styles.confirmationtext} style={confirmationTextStyle}>
        {confirmationText}
      </div>
      <div
        className={styles.overlaybuttoncontainer}
        style={overlayButtonContainerStyle}
      >
        <div
          className={styles.buttonlargenarrow}
          style={buttonLargeNarrowStyle}
        >
          <div className={styles.buttontextlarge} style={buttonTextLargeStyle}>
            Se nästa
          </div>
        </div>
        <div
          className={styles.buttonlargenarrow1}
          style={buttonLargeNarrow1Style}
        >
          <div
            className={styles.buttontextlarge1}
            style={buttonTextLarge1Style}
          >
            Stäng
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
