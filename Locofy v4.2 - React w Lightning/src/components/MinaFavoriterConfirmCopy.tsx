import { FunctionComponent } from "react";
import Overlay from "./Overlay";
import styles from "./MinaFavoriterConfirmCopy.module.css";

export type MinaFavoriterConfirmCopyType = {
  onClose?: () => void;
};

const MinaFavoriterConfirmCopy: FunctionComponent<
  MinaFavoriterConfirmCopyType
> = ({ onClose }) => {
  return (
    <div className={styles.minafavoriterconfirmCopy}>
      <Overlay
        overlayGap="32px"
        overlayMinWidth="288px"
        overlayMinHeight="319px"
        overlayCloseNavWidth="unset"
        overlayCloseNavAlignSelf="stretch"
        overlayCloseNavPadding="0px 1px"
        confirmationTextWidth="237px"
        confirmationTextHeight="unset"
      />
    </div>
  );
};

export default MinaFavoriterConfirmCopy;
