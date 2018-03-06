import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from '../styles/components/section.module.css'

function Section(props) {
  const { heading, intro, useDiv, spaced, bg, children } = props;

  const Root = useDiv ? 'div' : 'section'
  const classes = classnames(styles.section, {
    [`bg-${bg}`]: !!bg,
    [styles.spaced]: spaced,
  })

  return (
    <Root className={classes}>
      <div className={styles.inner}>
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
  bg: PropTypes.string,
  useDiv: PropTypes.bool,
  spaced: PropTypes.bool,
  children: PropTypes.any,
}

export default Section
