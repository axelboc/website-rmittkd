import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/components/banner.module.css'

const VARIANT_CLASSES = {
  tkd: styles.bannerTkd,
  dojang: styles.bannerDojang,
}

function Banner(props) {
  const { heading, intro, variant } = props;
  const rootClass = VARIANT_CLASSES[variant] || styles.banner;

  return (
    <div className={rootClass}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.heading}>{heading}</h1>
          <div className={styles.intro} dangerouslySetInnerHTML={{ __html: intro }} />
        </div>
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
