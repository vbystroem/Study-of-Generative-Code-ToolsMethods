import { FunctionComponent, useState, useCallback } from "react";
import MinaFavoriterConfirmV from "./MinaFavoriterConfirmV";
import PortalPopup from "./PortalPopup";
import styles from "./ButtonSmall.module.css";

const ButtonSmall: FunctionComponent = () => {
  const [isMinaFavoriterConfirmV5Open, setMinaFavoriterConfirmV5Open] =
    useState(false);

  const openMinaFavoriterConfirmV5 = useCallback(() => {
    setMinaFavoriterConfirmV5Open(true);
  }, []);

  const closeMinaFavoriterConfirmV5 = useCallback(() => {
    setMinaFavoriterConfirmV5Open(false);
  }, []);

  return (
    <>
      <button
        className={styles.buttonsmall}
        onClick={openMinaFavoriterConfirmV5}
      >
        <div className={styles.description}>Se beskrivning</div>
      </button>
      {isMinaFavoriterConfirmV5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMinaFavoriterConfirmV5}
        >
          <MinaFavoriterConfirmV onClose={closeMinaFavoriterConfirmV5} />
        </PortalPopup>
      )}
    </>
  );
};

export default ButtonSmall;
