import React from 'react'
import Link from 'gatsby-link'

import styles from '../styles/components/header.module.css'
import logo from '../images/logo.png'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logoLink} to="/">
          <img src={logo} alt="RMIT ITF Taekwon-Do homepage" />
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
                to="/"
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

export default Header
