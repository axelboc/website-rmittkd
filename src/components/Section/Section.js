import React from 'react'
import PropTypes from 'prop-types'

import styles from './section.module.css'

const VARIANT_STYLES = {
  primary: styles.section,
  secondary: styles.sectionSecondary,
  ternary: styles.sectionTernary,
}

function Section(props) {
  const { heading, intro, useDiv, spaced, variant, children } = props
  const Root = useDiv ? 'div' : 'section'

  return (
    <Root className={VARIANT_STYLES[variant]}>
      <div className={spaced ? styles.innerSpaced : styles.inner}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {intro && (
          <p
            className={styles.intro}
            dangerouslySetInnerHTML={{ __html: intro }}
          />
        )}
        {children}
      </div>
    </Root>
  )
}

Section.defaultProps = {
  variant: 'primary',
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
