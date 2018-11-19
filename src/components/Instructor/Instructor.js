import React from 'react'
import PropTypes from 'prop-types'
import romanize from 'romanize'
import LazyImage from '../LazyImage'

import styles from './instructor.module.css'

function Instructor(props) {
  const { name, degree, bio, photo, total } = props
  const { childImageSharp: { fixed } } = photo

  return (
    <div
      className={styles.instructor}
      data-total={total}
      data-total-even={total % 2 === 0 || null}
      data-total-div3={total % 3 === 0 || null}
    >
      <LazyImage
        className={styles.photo}
        {...fixed}
        alt=""
      />
      <h3 className={styles.heading}>
        {name}
        <span className={styles.sep}>{' · '}</span>
        <span className={styles.numeral}>{romanize(degree)}</span>
      </h3>
      <p
        className={styles.bio}
        dangerouslySetInnerHTML={{ __html: bio }}
      />
    </div>
  )
}

Instructor.propTypes = {
  name: PropTypes.string.isRequired,
  degree: PropTypes.number.isRequired,
  bio: PropTypes.string,
}

export default Instructor
