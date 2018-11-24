import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './header.module.css'
import Logo from '../../images/logos/logo-rmittkd.svg'

function Header(props) {
  const { isHome } = props

  return (
    <header className={isHome ? styles.homeHeader : styles.header}>
      <div className={styles.inner}>
        <Link
          className={styles.logoLink}
          to="/"
          aria-label="RMIT ITF Taekwon-Do homepage"
        >
          <Logo width="150" height="150" focusable="false" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.active}
                to="/"
              >
                <span className={styles.navLinkText}>Home</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.active}
                to="/tkd"
              >
                <span className={styles.navLinkText}>What is Taekwon-Do?</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.active}
                to="/dojang"
              >
                <span className={styles.navLinkText}>Our Dojang</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.active}
                to="/contact"
              >
                <span className={styles.navLinkText}>Get in touch</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  isHome: PropTypes.bool.isRequired,
}

export default Header
