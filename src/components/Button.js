import React from 'react'
import PropTypes from 'prop-types'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight'

import styles from '../styles/components/button.module.css'

function Button(props) {
  const { to, centred, children } = props

  const Anchor = (
    <a className={styles.btn} href={to}>{children}</a>
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
