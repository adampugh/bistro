import { SocialIcon } from 'react-social-icons';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.heroImage}>
      <Image src='/images/hero.jpg' alt='cagzys meals' layout='fill' />
    </div>
    <Fade bottom>
      <div className={styles.heroContent}>
        <div className='container'>
          <h1 className={styles.heroTitle}>Chef&apos;s specials every Sunday at Cagzy&apos;s</h1>
          <a href="#contact">
            <button className='button'>Book Now</button>
          </a>
          <div className={styles.socialIcons}>
            {/* can add link via facebook.com/cool-link */}
            <SocialIcon url="https://facebook.com/" bgColor='#fff' />
            <SocialIcon url="https://instagram.com/" bgColor='#fff' />
            <SocialIcon url="https://twitter.com/" bgColor='#fff' />
          </div>
        </div>
      </div>
    </Fade>
  </div>
);

export default Hero;
