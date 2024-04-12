import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ButtonLargeNarrow.module.css";

export type ButtonLargeNarrowType = {
  nejInteDen?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ButtonLargeNarrow: FunctionComponent<ButtonLargeNarrowType> = ({
  nejInteDen,
  propFlex,
  propPadding,
  propMinWidth,
}) => {
  const buttonLargeNarrowStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const nejInteDenStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const navigate = useNavigate();

  const onButtonLargeNarrowClick = useCallback(() => {
    navigate("/minafavoriteroption2-copy");
  }, [navigate]);

  return (
    <button
      className={styles.buttonlargenarrow}
      onClick={onButtonLargeNarrowClick}
      style={buttonLargeNarrowStyle}
    >
      <span className={styles.nejInteDen} style={nejInteDenStyle}>
        {nejInteDen}
      </span>
    </button>
  );
};

export default ButtonLargeNarrow;
