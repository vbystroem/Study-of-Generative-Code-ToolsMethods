import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ButtonCloseLargeBike.module.css";

const ButtonCloseLargeBike: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonCloseLargeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Link
      className={styles.buttoncloselarge}
      to="/"
      onClick={onButtonCloseLargeClick}
    >
      <img className={styles.navIcon} loading="lazy" alt="" src="/vector.svg" />
    </Link>
  );
};

export default ButtonCloseLargeBike;
