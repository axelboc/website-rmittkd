import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

function PageMeta(props) {
  const { isHome, title, description, path, image } = props

  const fullTitle = `${isHome ? '' : `${title} - `}RMIT ITF Taekwon-Do Club`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={isHome ? 'website' : 'article'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://rmittkd.com${path}`} />
      <meta property="og:image" content={image} />
      {isHome && (
        <meta property="og:site_name" content="https://rmittkd.com/" />
      )}
    </Helmet>
  )
}

PageMeta.defaultProps = {
  isHome: false,
  title: '',
}

PageMeta.propTypes = {
  isHome: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default PageMeta
