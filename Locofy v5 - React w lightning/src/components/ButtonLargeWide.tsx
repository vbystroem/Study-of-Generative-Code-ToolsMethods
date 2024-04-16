import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ButtonLargeWide.module.css";

export type ButtonLargeWideType = {
  buttonLargeWideHref: string;
  choose?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ButtonLargeWide: FunctionComponent<ButtonLargeWideType> = ({
  buttonLargeWideHref,
  choose,
  propWidth,
  propPadding,
  propWidth1,
  propMinWidth,
}) => {
  const buttonLargeWideStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const chooseStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth,
    };
  }, [propWidth1, propMinWidth]);

  return (
    <a className={styles.buttonlargewide} style={buttonLargeWideStyle}>
      <span className={styles.choose} style={chooseStyle}>
        {choose}
      </span>
    </a>
  );
};

export default ButtonLargeWide;
