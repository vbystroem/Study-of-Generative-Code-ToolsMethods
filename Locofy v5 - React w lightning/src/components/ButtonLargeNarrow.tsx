import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ButtonLargeNarrow.module.css";

export type ButtonLargeNarrowType = {
  choiceButton?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onButtonLargeNarrowClick?: () => void;
};

const ButtonLargeNarrow: FunctionComponent<ButtonLargeNarrowType> = ({
  choiceButton,
  propAlignSelf,
  onButtonLargeNarrowClick,
}) => {
  const choiceButton1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <button
      className={styles.buttonlargenarrow}
      onClick={onButtonLargeNarrowClick}
    >
      <span className={styles.choicebutton} style={choiceButton1Style}>
        {choiceButton}
      </span>
    </button>
  );
};

export default ButtonLargeNarrow;
