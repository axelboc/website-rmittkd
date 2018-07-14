import React from 'react'
import PropTypes from 'prop-types'
import Club from './Club'

import styles from '../styles/components/local-clubs.module.css'

function LocalClubs(props) {
  const { clubs } = props

  return (
    <div className={styles.localClubs}>
      <div className={styles.map}></div>
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
  clubs: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default LocalClubs
