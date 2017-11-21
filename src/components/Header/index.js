import React from 'react'
import Link from 'gatsby-link'

import styles from './header.module.css'
import logo from '../../images/logo.png'

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
                Home
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                exact
                to="/tkd"
              >
                What is Taekwon-Do?
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                exact
                to="/dojang"
              >
                Our Dojang
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                exact
                to="/"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
