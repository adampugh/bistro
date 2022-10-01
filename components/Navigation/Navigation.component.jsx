import NavigationDesktop from '../NavigationDesktop/NavigationDesktop.component';
import NavigationMobile from '../NavigationMobile/NavigationMobile.component';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <div className={styles.navigationWrapper}>
    <NavigationDesktop />
    <NavigationMobile />
  </div>
);

export default Navigation;