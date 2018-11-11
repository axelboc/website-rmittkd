import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/components/banner.module.css'

const VARIANT_STYLES = {
  home: styles.bannerHome,
  tkd: styles.bannerTkd,
  dojang: styles.bannerDojang,
  contact: styles.bannerContact,
}

function Banner(props) {
  const { heading, intro, variant } = props;

  const isHome = variant === 'home';
  const rootClass = VARIANT_STYLES[variant] || styles.banner;

  return (
    <div className={rootClass}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>{heading}</h1>
        {isHome && <p className={styles.sub}>RMIT University Club</p>}
        <div className={styles.intro} dangerouslySetInnerHTML={{ __html: intro }} />
      </div>
    </div>
  )
}

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default Banner
