import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackButtonBike.module.css";

const BackButtonBike: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
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

export default BackButtonBike;
