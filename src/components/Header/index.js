import React from 'react'
import Link from 'gatsby-link'

import styles from './index.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tkd">What is Taekwon-Do?</Link></li>
          <li><Link to="/dojang">Our Dojang</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
