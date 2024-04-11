import { FunctionComponent, useMemo, type CSSProperties } from 'react';
import styles from './Nav.module.css';

export type NavType = {
  
  /** Style props */
  navTitleMinHeight?: CSSProperties['minHeight'];
  propHeight?: CSSProperties['height'];
  propAlignSelf?: CSSProperties['alignSelf'];
  navHeight?: CSSProperties['height'];
  buttonBackHeight?: CSSProperties['height'];
  buttonBackAlignSelf?: CSSProperties['alignSelf'];
  navTitleMargin?: CSSProperties['margin'];
  
  /** Action props */
  onButtonCloseLargeClick?: () => void;
  () => navigate(-1)?: () => void;
}



const Nav:FunctionComponent<NavType> = ({ navTitleMinHeight, propHeight, propAlignSelf, onButtonCloseLargeClick, navHeight, buttonBackHeight, buttonBackAlignSelf, () => navigate(-1), navTitleMargin }) => {
  const buttonBackIconStyle: CSSProperties = useMemo(() => {
                  return {
                    minHeight: navTitleMinHeight,
      height: buttonBackHeight,
      alignSelf: buttonBackAlignSelf
                  };
                }, [navTitleMinHeight, buttonBackHeight, buttonBackAlignSelf]);
              
  const buttonCloseLargeIconStyle: CSSProperties = useMemo(() => {
                  return {
                    height: propHeight,
      alignSelf: propAlignSelf
                  };
                }, [propHeight, propAlignSelf]);
              
  const navStyle: CSSProperties = useMemo(() => {
                  return {
                    height: navHeight
                  };
                }, [navHeight]);
              
  const navTitleStyle: CSSProperties = useMemo(() => {
                  return {
                    margin: navTitleMargin
                  };
                }, [navTitleMargin]);
              
  return (
    <header className={styles.nav} style={navStyle}>
      <img className={styles.buttonbackIcon} onClick={() => navigate(-1)} style={buttonBackIconStyle} />
      <h1 className={styles.navtitle} style={navTitleStyle}>Mina favoriter</h1>
      <img className={styles.buttoncloselargeIcon} loading="lazy" onClick={onButtonCloseLargeClick} alt="" src="/xbuttonlarge.svg" style={buttonCloseLargeIconStyle} />
    </header>);
};

export default Nav;
