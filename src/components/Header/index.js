import React from 'react'
import Link from 'gatsby-link'

import styles from './index.css'
import logo from '../../images/logo.png'

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/"><img src={logo} alt="RMIT ITF Taekwon-Do homepage" /></Link>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tkd">What is Taekwon-Do?</Link></li>
          <li><Link to="/dojang">Our Dojang</Link></li>
          <li><Link to="/">Get in touch</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
