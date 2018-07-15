import React from 'react'
import PropTypes from 'prop-types'
import Club from './Club'

import styles from '../styles/components/local-clubs.module.css'

const GMAPS_API_URL = 'https://maps.googleapis.com/maps/api/staticmap'
const MAP_DIMENSIONS = [640, 432]

function LocalClubs(props) {
  const { clubs, mapStyles } = props

  const mapParams = [
    `size=${MAP_DIMENSIONS.join('x')}`,
    `key=${process.env.GATSBY_GMAPS_KEY}`,
    `visible=${encodeURIComponent('Melbourne VIC 3000, Australia')}`,
    ...clubs.map(c => `markers=${c.address}`),
    ...mapStyles.map(str => `style=${encodeURIComponent(str)}`),
  ].join('&')

  return (
    <div className={styles.localClubs}>
      <div className={styles.map}>
        <img
          className={styles.mapImg}
          src={`${GMAPS_API_URL}?${mapParams}`}
          width={MAP_DIMENSIONS[0]}
          height={MAP_DIMENSIONS[1]}
          alt=""
        />
      </div>
      <ul className={styles.list}>
        {clubs.map(club => (
          <li className={styles.club} key={club.name}>
            <Club {...club} />
          </li>
        ))}
      </ul>
    </div>
  )
}

LocalClubs.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string,
    state: PropTypes.string,
  })).isRequired,
  mapStyles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default LocalClubs
