import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import styles from './Footer.module.scss';

const footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.footerMap}>
        <Image src='/images/map.png' alt='map' layout='fill' />
      </div>
      <div className={styles.logo}>
        <h3>Cagzys</h3>
        <h4>Bistro</h4>
      </div>
      <div className={styles.socialIcons}>
        {/* can add link via facebook.com/cool-link */}
        <SocialIcon url="https://facebook.com/" bgColor='#fff' />
        <SocialIcon url="https://instagram.com/" bgColor='#fff' />
        <SocialIcon url="https://twitter.com/" bgColor='#fff' />
      </div>
    </div>
  </footer>
);

export default footer;