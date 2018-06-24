import React from 'react'
import PropTypes from 'prop-types'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'

import styles from '../styles/components/button.module.css'

function Button(props) {
  const { to, centred, children } = props

  const Anchor = (
    <a className={styles.btn} href={to}>
      {children}
      <FontAwesomeIcon
        className={styles.icon}
        icon={faAngleDoubleRight}
        width="18"
        height="18"
      />
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
