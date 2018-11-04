import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'

import styles from '../styles/components/footer.module.css'
import logoRmitLink from '../images/logos/logo-rmit-link.png'
import logoChitf from '../images/logos/logo-chitf.png'
import logoChitfAus from '../images/logos/logo-chitf-australia.png'
import logoLaiTkd from '../images/logos/logo-lai-tkd.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.rmitLink}>
          <a className={styles.logoLink} href="https://rmitlink.rmit.edu.au/">
            <img src={logoRmitLink} width="135" height="80" alt="RMIT Link" />
          </a>
        </div>
        <ul className={styles.orgLogoList}>
          <li className={styles.orgLogoItem}>
            <a className={styles.logoLink} href="http://www.chitf.org/">
              <img src={logoChitf} width="100" height="100" alt="CHITF, Chan Hun International Taekwon-Do Federation" />
            </a>
          </li>
          <li className={styles.orgLogoItem}>
            <a className={styles.logoLink} href="https://www.facebook.com/chitfaustralia">
              <img src={logoChitfAus} width="143" height="100" alt="CHITF Australia" />
            </a>
          </li>
          <li className={styles.orgLogoItem}>
            <a className={styles.logoLink} href="http://www.laitkd.com.au/">
              <img src={logoLaiTkd} width="100" height="100" alt="Lai Taekwon-Do" />
            </a>
          </li>
        </ul>
        <p className={styles.socialMedia}>
          follow us on
          <span className={styles.socialIcons}>
            <a className={styles.socialLink} href="https://www.instagram.com/rmittkd/">
              <FontAwesomeIcon
                className={styles.icon}
                icon={faInstagram}
                size="3x"
                aria-label="Instagram"
              />
            </a>
            <a className={styles.socialLink} href="https://www.facebook.com/rmittkd">
              <FontAwesomeIcon
                className={styles.icon}
                icon={faFacebookSquare}
                size="3x"
                aria-label="Facebook"
              />
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
