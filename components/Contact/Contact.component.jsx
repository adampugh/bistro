import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { Fade } from 'react-reveal';
import styles from './Contact.module.scss';

const Contact = () => (
  <section id='contact' className={styles.contact}>
    <Fade bottom>
      <div className="container">
        <h2 className='title'>Contact</h2>
        <div className={styles.contactSections}>
          <div className={styles.contactSection}>
            <h4 className={styles.contactSectionTitle}>Opening Times</h4>
            <div className={styles.contactSectionRow}>
              <p>MON - FRI</p>
              <p>11:30AM - 11:00PM</p>
            </div>
            <div className={styles.contactSectionRow}>
              <p>SAT - SUN</p>
              <p>11:30AM - 1:00AM</p>
            </div>
          </div>
          <div className={styles.contactSection}>
            <h4 className={styles.contactSectionTitle}>Make a reservation</h4>
            <div className={styles.contactSectionRow}>
              <p><BsFillTelephoneFill/></p>
              <p>0151 920 1111</p>
            </div>
            <div className={styles.contactSectionRow}>
              <p><GrMail/></p>
              <p>BOOKING@CAGZYS.CO.UK</p>
            </div>
          </div>
        </div>
        <p className={styles.contactLocation}>
          22 st johns road, waterloo, liverpool, merseyside L22 6BE
        </p>
      </div>
    </Fade>
  </section>
);

export default Contact;