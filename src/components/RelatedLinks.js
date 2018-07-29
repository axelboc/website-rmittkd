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
        return (
          <li key={item.label} className={styles.item}>
            <Link
              className={styles.link}
              to={item.href}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span className={styles.label}>
                {item.label}
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faAngleDoubleRight}
                  width="18"
                  height="18"
                />
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
    label: PropTypes.string,
    href: PropTypes.string,
    img: PropTypes.string,
  })),
}

export default RelatedLinks
