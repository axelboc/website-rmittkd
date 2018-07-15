import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import faCalendarAlt from '@fortawesome/fontawesome-free-solid/faCalendarAlt'
import faClock from '@fortawesome/fontawesome-free-solid/faClock'

import styles from '../styles/components/location.module.css'

const GMAPS_API_URL = 'https://maps.googleapis.com/maps/api/staticmap'
const MAP_DIMENSIONS = [341, 305] // height takes into account one `times` entry by default
const MAP_HEIGHT_INCREMENT = 85 // extra height for every additional `times` entry

function Location(props) {
  const { suburb, location, address, times, mapStyles } = props

  const [mapWidth, mapDefaultHeight] = MAP_DIMENSIONS
  const mapHeight = mapDefaultHeight + MAP_HEIGHT_INCREMENT * (times.length - 1)

  const mapParams = [
    `size=${mapWidth}x${mapHeight}`,
    `markers=${address}`,
    `key=${process.env.GATSBY_GMAPS_KEY}`,
    `visible=${encodeURIComponent('Melbourne VIC 3000, Australia')}`,
    ...mapStyles.map(str => `style=${encodeURIComponent(str)}`),
  ].join('&')

  return (
    <div className={styles.location}>
      <div className={styles.map}>
        <img
          src={`${GMAPS_API_URL}?${mapParams}`}
          width={mapWidth}
          height={mapHeight}
          alt=""
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.suburb}>{suburb}</h2>
        <div className={styles.details}>
          <p className={styles.address}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faMapMarkerAlt}
              width="18"
              height="18"
            />
            {location}
          </p>
          <dl className={styles.times}>
            {times.map((entry) => {
              const { days, from, to } = entry
              return [
                <dt key={0}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faCalendarAlt}
                    width="18"
                    height="18"
                  />
                  {days}
                </dt>,
                <dd key={1}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faClock}
                    width="18"
                    height="18"
                  />
                  {from} &ndash; {to}
                </dd>
              ]
            })}
          </dl>
          <div className={styles.btn}>
            <Button to={`https://www.google.com.au/maps/dir//${address}`}>
              Getting there
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

Location.propTypes = {
  suburb: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  address: PropTypes.string,
  times: PropTypes.arrayOf(PropTypes.shape({
    days: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
  mapStyles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Location
