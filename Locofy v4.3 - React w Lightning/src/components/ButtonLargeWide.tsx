import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ButtonLargeWide.module.css";

export type ButtonLargeWideType = {
  vljFrnLista?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propTextAlign?: CSSProperties["textAlign"];
  propDisplay?: CSSProperties["display"];
};

const ButtonLargeWide: FunctionComponent<ButtonLargeWideType> = ({
  vljFrnLista,
  propPadding,
  propWidth,
  propFlexDirection,
  propMinWidth,
  propFlex,
  propWidth1,
  propMinWidth1,
  propTextAlign,
  propDisplay,
}) => {
  const buttonLargeWideStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
      flexDirection: propFlexDirection,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propPadding, propWidth, propFlexDirection, propMinWidth, propFlex]);

  const vljFrnListaStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth1,
      textAlign: propTextAlign,
      display: propDisplay,
    };
  }, [propWidth1, propMinWidth1, propTextAlign, propDisplay]);

  return (
    <button className={styles.buttonlargewide} style={buttonLargeWideStyle}>
      <span className={styles.vljFrnLista} style={vljFrnListaStyle}>
        {vljFrnLista}
      </span>
    </button>
  );
};

export default ButtonLargeWide;
