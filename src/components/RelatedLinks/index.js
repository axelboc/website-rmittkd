import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styles from './related-links.module.css'

function RelatedLinks(props) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map(item => {
        return (
          <li key={item.label} className={styles.item}>
            <Link
              className={styles.link}
              to={item.href}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span className={styles.label}>{item.label}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

RelatedLinks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    img: PropTypes.string,
  })),
}

export default RelatedLinks
