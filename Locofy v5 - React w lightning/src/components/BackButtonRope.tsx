import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackButtonRope.module.css";

const BackButtonRope: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/minafavoriteroption1-v5");
  }, [navigate]);

  return (
    <img
      className={styles.buttonIcon}
      loading="lazy"
      alt=""
      src="/button1.svg"
      onClick={onButtonClick}
    />
  );
};

export default BackButtonRope;
