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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tkd">What is Taekwon-Do?</Link></li>
            <li><Link to="/dojang">Our Dojang</Link></li>
            <li><Link to="/">Get in touch</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
