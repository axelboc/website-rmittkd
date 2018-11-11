import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/components/section.module.css'

const VARIANT_STYLES = {
  alt1: styles.sectionAlt1,
  alt2: styles.sectionAlt2,
}

function Section(props) {
  const { heading, intro, useDiv, spaced, variant, children } = props;
  const Root = useDiv ? 'div' : 'section'

  return (
    <Root className={variant ? VARIANT_STYLES[variant] : styles.section}>
      <div className={spaced ? styles.innerSpaced : styles.inner}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {intro && <p className={styles.intro} dangerouslySetInnerHTML={{ __html: intro }}></p>}
        {children}
      </div>
    </Root>
  )
}

Section.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.string,
  variant: PropTypes.string,
  useDiv: PropTypes.bool,
  spaced: PropTypes.bool,
  children: PropTypes.any,
}

export default Section
