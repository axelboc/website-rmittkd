import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image";
import romanize from 'romanize'

import styles from '../styles/components/instructor.module.css'

function Instructor(props) {
  const { name, degree, bio, photo, total } = props

  return (
    <div
      className={styles.instructor}
      data-total={total}
      data-total-even={total % 2 === 0 || null}
      data-total-div3={total % 3 === 0 || null}
    >
      <Img
        className={styles.photo}
        sizes={photo.childImageSharp.sizes}
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
