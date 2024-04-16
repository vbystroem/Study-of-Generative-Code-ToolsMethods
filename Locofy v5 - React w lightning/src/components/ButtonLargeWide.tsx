import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const onButtonLargeWideClick = useCallback(() => {
    navigate("/minafavoriteroption1-v5");
  }, [navigate]);

  return (
    <a
      className={styles.buttonlargewide}
      onClick={onButtonLargeWideClick}
      style={buttonLargeWideStyle}
    >
      <span className={styles.choose} style={chooseStyle}>
        {choose}
      </span>
    </a>
  );
};

export default ButtonLargeWide;
