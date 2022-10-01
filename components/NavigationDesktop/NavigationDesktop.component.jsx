import { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-reveal';
import { BiMenu } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import styles from './NavigationDesktop.module.scss';

const NavigationDesktop = () => (
  <nav className={styles.navigation}>
    <div className="container">
      <div className={styles.navigationWrapper}>
        <div className={styles.navigationLink}>
          <a href="#about">About</a>
        </div>
        <div className={styles.navigationLink}>
          <a href="#menu">Menu</a>
        </div>
        <div className={styles.logo}>
          <h3>Cagzys</h3>
          <h4>Bistro</h4>
        </div>
        <div className={styles.navigationLink}>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <button className='button'>Book now</button>
        </div>
      </div>
    </div>
  </nav>
);

export default NavigationDesktop;