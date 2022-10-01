import { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-reveal';
import { BiMenu } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import styles from './NavigationMobile.module.scss';

const NavigationMobile = () => {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  useEffect(() => {
    const body = document.body
    overlayIsOpen ? body.classList.add('locked') : body.classList.remove('locked');
  }, [overlayIsOpen]);

  return (
    <nav className={styles.navigation}>
      <div className="container">
        <div className={styles.navigationWrapper}>
          <div className={styles.logo}>
            <h3>Cagzys</h3>
            <h4>Bistro</h4>
          </div>
          <div className={styles.menu} onClick={() => setOverlayIsOpen(!overlayIsOpen)}>
            {overlayIsOpen ? (
              <Fade>
                <div className={styles.menuCross}>
                  <ImCross /> 
                </div>
              </Fade>
              ) : <BiMenu />
            }
          </div>
        </div>
      </div>
      {overlayIsOpen && (
        <Slide top>
          <div className={styles.navigationOverlay}>
            <div className="container">
              <div className={styles.navigationOverlayLinks}>
                <a 
                  className={`title ${styles.navigationOverlayLink}`}
                  href="#about"
                  onClick={() => setOverlayIsOpen(false)}>
                    About
                </a>
                <a 
                  className={`title ${styles.navigationOverlayLink}`}
                  href="#menu" 
                  onClick={() => setOverlayIsOpen(false)}>
                    Menu
                </a>
                <a 
                  className={`title ${styles.navigationOverlayLink}`}
                  href="#contact"
                  onClick={() => setOverlayIsOpen(false)}>
                    Contact
                </a>
              </div>
            </div>
          </div>
        </Slide>
      )}
    </nav>
  );
}

export default NavigationMobile;