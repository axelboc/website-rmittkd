import React from 'react'

import styles from './styles/footer.module.css'
import logoRmitLink from '../images/logos/logo-rmit-link.png'
import logoChitf from '../images/logos/logo-chitf.png'
import logoChitfAus from '../images/logos/logo-chitf-australia.png'
import logoLaiTkd from '../images/logos/logo-lai-tkd.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <a className={styles.logoLink} href="https://rmitlink.rmit.edu.au/">
            <img src={logoRmitLink} width="100" height="100" alt="RMIT Link" />
          </a>
        </li>
        <li className={styles.orgLogoItem}>
          <a className={styles.logoLink} href="http://www.chitf.org/">
            <img src={logoChitf} width="100" height="100" alt="CHITF, Chan Hun International Taekwon-Do Federation" />
          </a>
        </li>
        <li className={styles.orgLogoItem}>
          <a className={styles.logoLink} href="https://www.facebook.com/chitfaustralia">
            <img src={logoChitfAus} width="125" height="100" alt="CHITF Australia" />
          </a>
        </li>
        <li className={styles.orgLogoItem}>
          <a className={styles.logoLink} href="http://www.laitkd.com.au/">
            <img src={logoLaiTkd} width="100" height="100" alt="Lai Taekwon-Do" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/rmittkd">Follow us on Facebook</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
