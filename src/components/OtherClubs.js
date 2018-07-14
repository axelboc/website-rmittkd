import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Club from './Club'

import styles from '../styles/components/other-club.module.css'

function OtherClubs(props) {
  const { clubs } = props

  return (
    <ul className={styles.otherClubs}>
      {clubs.map(club => (
        <li className={styles.club} key={club.name}>
          <Club {...club} />
        </li>
      ))}
    </ul>
  )
}

OtherClubs.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default OtherClubs
