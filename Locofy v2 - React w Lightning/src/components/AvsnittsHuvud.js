import styles from "./AvsnittsHuvud.module.css";

const AvsnittsHuvud = ({ onBaktpilIconClick }) => {
  return (
    <header className={styles.avsnittshuvud}>
      <div className={styles.avsnittshuvudChild} />
      <div className={styles.baktpilWrapper}>
        <img
          className={styles.baktpilIcon}
          loading="lazy"
          alt=""
          src="/baktpil.svg"
          onClick={onBaktpilIconClick}
        />
      </div>
      <div className={styles.avsnittsrubrikParent}>
        <div className={styles.avsnittsrubrik}>Mina favoriter</div>
        <img
          className={styles.stngkryssIcon}
          loading="lazy"
          alt=""
          src="/stngkryss.svg"
        />
      </div>
    </header>
  );
};

export default AvsnittsHuvud;
