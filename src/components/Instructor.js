import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image";
import Numeral from 'roman-numeral-convert/src/app'

import styles from '../styles/components/instructor.module.css'

function Instructor(props) {
  const { name, degree, bio, photo, total } = props
  const numeral = new Numeral(degree)

  return (
    <div
      className={styles.instructor}
      data-total={total}
      data-total-even={total % 2 === 0 || null}
      data-total-div3={total % 3 === 0 || null}
    >
      <Img
        className={styles.photo}
        resolutions={photo.childImageSharp.resolutions}
        alt=""
      />
      <h2 className={styles.heading}>
        {name}
        <span className={styles.sep}>{' · '}</span>
        <span className={styles.numeral}>{numeral.number}</span>
      </h2>
      <p
        className={styles.bio}
        dangerouslySetInnerHTML={{ __html: bio }}
      />
    </div>
  )
}

Instructor.propTypes = {
  name: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  bio: PropTypes.string,
  count: PropTypes.number.isRequired,
}

export default Instructor
