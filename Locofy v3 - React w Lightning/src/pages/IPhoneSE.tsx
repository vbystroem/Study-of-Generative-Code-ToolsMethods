import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./IPhoneSE.module.css";

const IPhoneSE: FunctionComponent = () => {
  return (
    <div className={styles.iphoneSe95}>
      <Nav xButtonLargeIcon={false} />
      <div className={styles.headingmediumWrapper}>
        <div className={styles.headingmedium}>
          Hur vill du lägga till aktiviteter?
        </div>
      </div>
      <FrameComponent3 />
    </div>
  );
};

export default IPhoneSE;
