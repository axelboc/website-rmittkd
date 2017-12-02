import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/location.module.css'

const GMAPS_API_URL = 'https://maps.googleapis.com/maps/api/staticmap';
const MAP_PARAMS = [
  `key=${process.env.GMAPS_API_KEY}`,
  'size=400x400',
  `visible=${encodeURIComponent('Melbourne VIC 3000, Australia')}`,
].join('&')

// https://snazzymaps.com/style/8083/mymap
const MAP_STYLES = 'style=element:labels.text.fill%7Ccolor:0xffffff&style=element:labels.text.stroke%7Ccolor:0x000000%7Clightness:13&style=feature:administrative%7Celement:geometry.fill%7Ccolor:0x000000&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0x144b53%7Clightness:14%7Cweight:1.4&style=feature:administrative.locality%7Cvisibility:on&style=feature:administrative.locality%7Celement:labels.icon%7Cvisibility:on&style=feature:landscape%7Ccolor:0x08304b&style=feature:poi%7Celement:geometry%7Ccolor:0x0c4152%7Clightness:5&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0x000000&style=feature:road.arterial%7Celement:geometry.stroke%7Ccolor:0x0b3d51%7Clightness:16&style=feature:road.highway%7Celement:geometry.fill%7Ccolor:0x000000&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x0b434f%7Clightness:25&style=feature:road.local%7Celement:geometry%7Ccolor:0x000000&style=feature:transit%7Ccolor:0x146474&style=feature:water%7Ccolor:0x021019'

function Location(props) {
  const { address, suburb, times } = props;
  const mapParams = `markers=${encodeURIComponent(address)}&${MAP_PARAMS}&${MAP_STYLES}`

  return (
    <div className={styles.location}>
      <div
        className={styles.map}
        style={{ backgroundImage: `url('${GMAPS_API_URL}?${mapParams}')` }}
      />
      <div className={styles.content}>
        <h2>{suburb}</h2>
        <p>{address}</p>
        <dl>
          {times.map((entry) => {
            const { days, from, to } = entry
            return [
              <dt key={0}>{days}</dt>,
              <dd key={1}>{from} &ndash; {to}</dd>
            ]
          })}
        </dl>
      </div>
    </div>
  )
}

Location.propTypes = {
  suburb: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  times: PropTypes.arrayOf(PropTypes.shape({
    days: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
}

export default Location
