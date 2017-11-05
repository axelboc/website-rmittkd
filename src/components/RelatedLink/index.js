import React from 'react'
import Link from 'gatsby-link'

import styles from './index.css'

function RelatedLink(props) {
  const { to, children } = props;
  return (
    <Link className={styles.related} to={to}>
      {children}
    </Link>
  )
}

export default RelatedLink
