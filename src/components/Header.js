import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styles from '../styles/components/header.module.css'
import logo from '../images/logo.png'

function Header(props) {
  const { home } = props

  return (
    <header className={home ? styles.homeHeader : styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logoLink} to="/">
          <img src={logo} alt="RMIT ITF Taekwon-Do homepage" width="150" height="150" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                exact
                to="/"
              >
                <span className={styles.navLinkInner}>Home</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                exact
                to="/tkd"
              >
                <span className={styles.navLinkInner}>What is Taekwon-Do?</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                exact
                to="/dojang"
              >
                <span className={styles.navLinkInner}>Our Dojang</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                exact
                to="/contact"
              >
                <span className={styles.navLinkInner}>Get in touch</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  home: PropTypes.bool,
}

export default Header
