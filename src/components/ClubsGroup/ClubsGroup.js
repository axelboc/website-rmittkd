import React from 'react'
import PropTypes from 'prop-types'

import Club from '../Club/Club'
import GMap from '../GMap/GMap'

import styles from './clubs-group.module.css'

function ClubsGroup(props) {
  const { heading, clubs, mapFocus } = props

  return (
    <div className={styles.clubsGroup}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.map}>
        <GMap
          dimensions={[574, 326]}
          focus={mapFocus}
          addresses={clubs.map(c => c.address || `${c.city}, ${c.state} Australia`)}
        />
      </div>
      <ul className={styles.list}>
        {clubs.map((club, index) => (
          <li className={styles.club} key={club.name}>
            <Club index={index} {...club} />
          </li>
        ))}
      </ul>
    </div>
  )
}

ClubsGroup.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string,
    state: PropTypes.string,
  })).isRequired,
  mapFocus: PropTypes.string,
}

export default ClubsGroup
