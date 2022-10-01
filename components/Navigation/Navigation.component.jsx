import { BiMenu } from 'react-icons/bi';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <div className="container">
      <div className={styles.navigationWrapper}>
        <div className={styles.logo}>
          <h3>Cagzys</h3>
          <h4>Bistro</h4>
        </div>
        <div className={styles.menu}>
          <BiMenu />
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;