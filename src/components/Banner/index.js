import React from 'react'
import PropTypes from 'prop-types'

import styles from './banner.module.css'

function Banner(props) {
  const { heading, intro, image } = props;

  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.heading}>{heading}</h1>
          <div className={styles.intro} dangerouslySetInnerHTML={{ __html: intro }} />
        </div>
        <div className={styles.image} style={{ backgroundImage: `url('${image}')`}} />
      </div>
    </div>
  )
}

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default Banner
