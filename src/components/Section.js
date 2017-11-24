import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/section.module.css'

function Section(props) {
  const { heading, intro, useDiv, altBg, children } = props;
  const Root = useDiv ? 'div' : 'section'

  return (
    <Root className={styles[altBg ? 'altSection' : 'section']}>
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
  altBg: PropTypes.bool,
  useDiv: PropTypes.bool,
  children: PropTypes.any,
}

export default Section
