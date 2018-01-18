import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

import styles from './styles/button.module.css'

function Button(props) {
  const { to, centred, children } = props

  const Anchor = (
    <a className={styles.btn} href={to}>
      {children}
      <Icon className={styles.icon} name="chevron-right" width="12" height="12" />
    </a>
  )

  return !centred ? Anchor : (
    <div className={styles.wrapper}>
      {Anchor}
    </div>
  )
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  centred: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button
