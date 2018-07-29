import React from 'react'
import PropTypes from 'prop-types'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'

import styles from '../styles/components/club.module.css'

function Club(props) {
  const { index, name, url, city, state } = props
  const cityState = `${city}${state ? `, ${state}` : ''}`

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

Club.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string,
}

export default Club
