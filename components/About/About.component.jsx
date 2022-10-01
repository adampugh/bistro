import Image from 'next/image';
import styles from './About.module.scss';

const About = () => (
  <section className={styles.about}>
    <div className="container">
      <div className={styles.aboutFlex}>
        <div className={styles.aboutContent}>
          <h2 className='title'>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse quos dolorem aspernatur suscipit, quis mollitia a, repellendus vitae quisquam sed sit? Tempore placeat voluptatibus voluptatum excepturi temporibus facere corporis, culpa accusantium sequi debitis animi aliquam harum doloremque quas ut blanditiis, iure maxime dolor hic nulla? Veniam perspiciatis vero maiores, voluptatibus corporis possimus quo, quae aperiam corrupti, non ab illo.</p>
          <button className="button">Book now</button>
        </div>
        <div className={styles.aboutImages}>
          <div className={styles.aboutImage}>
            <Image src='/images/steak.jpg' alt='steak' layout='fill' />
          </div>
          <div className={styles.aboutImage}>
            <Image src='/images/steak.jpg' alt='steak' layout='fill' />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
