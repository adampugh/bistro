import React from 'react';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import styles from './ComingSoon.module.scss';

const ComingSoon = () => (
  <div className={styles.hero}>
    <div className={styles.heroImage}>
      <Image src='/images/hero.jpg' alt='cagzys meals' layout='fill' />
    </div>
    <Fade bottom>
      <div className={styles.logo}>
        <h3>Cagzys</h3>
        <h4>Bistro</h4>
      </div>
      <div className={styles.heroContent}>
        <div className='container'>
          <h1 className={styles.heroTitle}>Coming Soon</h1>
          <p>Please check back soon</p>
        </div>
      </div>
    </Fade>
  </div>
);

export default ComingSoon;
