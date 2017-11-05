import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function LayoutMeta() {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-AU',
        prefix: 'og: http://ogp.me/ns#',
      }}
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:locale', content: 'en_GB' },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', href: '/assets/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/assets/favicon-16x16.png', sizes: '16x16' },
        { rel: 'shortcut icon', href: '/assets/favicon.ico' },
        { rel: 'publisher', href: 'https://www.google.com/+RmittkdCHITF' },
      ]}
    />
  )
}

export default LayoutMeta
