import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'

import styles from '../styles/components/related-links.module.css'

function RelatedLinks(props) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map(item => {
        const { title, path, img } = item
        const { childImageSharp: { sizes: { src } } } = img;

        return (
          <li key={title} className={styles.item}>
            <Link
              className={styles.link}
              to={path}
              style={{ backgroundImage: `url('${src}')` }}
            >
              <span className={styles.label}>
                {title}
                <span className={styles.arrow}>🡒</span>
              </span>
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
