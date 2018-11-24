import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import LazyImage from '../LazyImage'

import styles from './related-links.module.css'

function RelatedLinks(props) {
  const { items } = props

  return (
    <ul className={styles.list}>
      {items.map(item => {
        const { title, path, img } = item
        const {
          childImageSharp: { fixed },
        } = img

        return (
          <li key={title} className={styles.item}>
            <Link className={styles.link} to={path}>
              <LazyImage className={styles.image} {...fixed} alt="" />
              <span className={styles.label}>{title}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

RelatedLinks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      img: PropTypes.object,
    })
  ).isRequired,
}

export default RelatedLinks
