import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import LazyImage from '../LazyImage'

import styles from './footer.module.css'
import logoRmitLink from '../../images/logos/logo-rmit-link.png'
import logoRmitLink2x from '../../images/logos/logo-rmit-link-2x.png'
import logoChitf from '../../images/logos/logo-chitf.png'
import logoChitf2x from '../../images/logos/logo-chitf-2x.png'
import logoChitfAus from '../../images/logos/logo-chitf-australia.png'
import logoChitfAus2x from '../../images/logos/logo-chitf-australia-2x.png'
import logoLaiTkd from '../../images/logos/logo-lai-tkd.png'
import logoLaiTkd2x from '../../images/logos/logo-lai-tkd-2x.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.rmitLink}>
          <a className={styles.logoLink} href="https://rmitlink.rmit.edu.au/">
            <LazyImage
              className={styles.logoImage}
              src={logoRmitLink}
              srcSet={`${logoRmitLink}, ${logoRmitLink2x} 2x`}
              width="135" height="80"
              alt="RMIT Link"
            />
          </a>
        </div>
        <ul className={styles.orgLogoList}>
          <li className={styles.orgLogoItem}>
            <a className={styles.logoLink} href="http://www.chitf.org/">
              <LazyImage
                className={styles.logoImage}
                src={logoChitf}
                srcSet={`${logoChitf}, ${logoChitf2x} 2x`}
                width="100" height="100"
                alt="CHITF, Chan Hun International Taekwon-Do Federation"
              />
            </a>
          </li>
          <li className={styles.orgLogoItem}>
            <a className={styles.logoLink} href="https://www.facebook.com/chitfaustralia">
              <LazyImage
                className={styles.logoImage}
                src={logoChitfAus}
                srcSet={`${logoChitfAus}, ${logoChitfAus2x} 2x`}
                width="143" height="100"
                alt="CHITF Australia"
              />
            </a>
          </li>
          <li className={styles.orgLogoItem}>
            <a className={styles.logoLink} href="http://www.laitkd.com.au/">
              <LazyImage
                className={styles.logoImage}
                src={logoLaiTkd}
                srcSet={`${logoLaiTkd}, ${logoLaiTkd2x} 2x`}
                width="100" height="100"
                alt="Lai Taekwon-Do"
              />
            </a>
          </li>
        </ul>
        <p className={styles.socialMedia}>
          follow us on
          <span className={styles.socialIcons}>
            <a
              className={styles.socialLink}
              href="https://www.instagram.com/rmittkd/"
              aria-label="Instagram"
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faInstagram}
                size="3x"
              />
            </a>
            <a
              className={styles.socialLink}
              href="https://www.facebook.com/rmittkd"
              aria-label="Facebook"
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faFacebookSquare}
                size="3x"
              />
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
