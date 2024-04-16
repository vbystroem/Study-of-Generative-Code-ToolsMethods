import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ButtonCloseLargeRope.module.css";

const ButtonCloseLargeRope: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonCloseLargeImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <img
      className={styles.buttoncloselargeIcon}
      onClick={onButtonCloseLargeImageClick}
    />
  );
};

export default ButtonCloseLargeRope;
