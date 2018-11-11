import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from '../styles/components/related-links.module.css'

function RelatedLinks(props) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map(item => {
        const { title, path, img } = item
        const { childImageSharp: { fluid: { src } } } = img;

        return (
          <li key={title} className={styles.item}>
            <Link
              className={styles.link}
              to={path}
              style={{ backgroundImage: `url('${src}')` }}
            >
              <span className={styles.label}>{title}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

RelatedLinks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    img: PropTypes.object,
  })),
}

export default RelatedLinks
