import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './club.module.css'

function Club(props) {
  const { index, name, url, city, state } = props
  const cityState = `${city}${state ? `, ${state}` : ''}`

  return (
    <>
      <div className={styles.header}>
        <span className={styles.city}>{cityState}</span>
        <span className={styles.mapRef}>{String.fromCharCode(65 + index)}</span>
      </div>
      <p className={styles.name}>{name}</p>
      <a className={styles.link} href={url}>
        <span className={styles.linkUrl}>{url}</span>
        <FontAwesomeIcon
          className={styles.linkIcon}
          icon={faExternalLinkAlt}
          width="12"
          height="12"
          size="xs"
        />
      </a>
    </>
  )
}

Club.defaultProps = {
  state: null,
}

Club.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string,
}

export default Club
