import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function PageMeta(props) {
  const { isHome, title, description, path, socialImage } = props

  const fullTitle = `${isHome ? '' : `${title} - `}RMIT ITF Taekwon-Do`

  return (
    <Helmet
      title={fullTitle}
      meta={[
        { name: 'description', content: description },
        { property: 'og:type', content: (isHome ? 'website' : 'article') },
        { property: 'og:title', content: fullTitle },
        { property: 'og:description', content: description },
        { property: 'og:url', content: `https://rmittkd.com${path}` },
        { property: 'og:image', content: socialImage },
        ...(isHome ? [] : [{ property: 'og:site_name', content: 'https://rmittkd.com/' }]),
      ]}
    />
  )
}

PageMeta.propTypes = {
  isHome: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  socialImage: PropTypes.string,
}

export default PageMeta
