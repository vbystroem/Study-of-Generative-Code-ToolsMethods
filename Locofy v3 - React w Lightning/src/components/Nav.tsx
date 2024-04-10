import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Nav.module.css";

export type NavType = {
  xButtonLargeIcon?: boolean;

  /** Style props */
  xButtonLargeIconWidth?: CSSProperties["width"];
  xButtonLargeIconFlex?: CSSProperties["flex"];

  /** Action props */
  onXButtonLargeClick?: () => void;
};

const Nav: FunctionComponent<NavType> = ({
  xButtonLargeIcon,
  xButtonLargeIconWidth,
  xButtonLargeIconFlex,
  onXButtonLargeClick,
}) => {
  const minaFavoriterStyle: CSSProperties = useMemo(() => {
    return {
      width: xButtonLargeIconWidth,
      flex: xButtonLargeIconFlex,
    };
  }, [xButtonLargeIconWidth, xButtonLargeIconFlex]);

  return (
    <header className={styles.nav}>
      <img
        className={styles.backtickIcon}
        loading="lazy"
        alt=""
        src="/backtick.svg"
      />
      <div className={styles.minaFavoriter} style={minaFavoriterStyle}>
        Mina favoriter
      </div>
      {!xButtonLargeIcon && (
        <img
          className={styles.xbuttonlargeIcon}
          alt=""
          src="/xbuttonlarge.svg"
          onClick={onXButtonLargeClick}
        />
      )}
    </header>
  );
};

export default Nav;
