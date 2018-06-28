import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'

import styles from '../styles/components/other-club.module.css'

function OtherClub(props) {
  const { name, url, location, state } = props

  return (
    <a className={styles.link} href={url}>
      <span className={styles.state}>{state}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.location}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faMapMarkerAlt}
          width="18"
          height="18"
        />
        {location}
      </span>
    </a>
  )
}

OtherClub.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
}

export default OtherClub
