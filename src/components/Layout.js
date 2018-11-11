import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

import '../styles/index.css'

function Layout(props) {
  const { isHome, children } = props

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: 'en-AU',
          prefix: 'og: http://ogp.me/ns#',
        }}
        meta={[
          { property: 'og:locale', content: 'en_GB' },
        ]}
        link={[
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,400,600' },
          { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
          { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
          { rel: 'shortcut icon', href: '/favicon.ico' },
          { rel: 'publisher', href: 'https://www.google.com/+RmittkdCHITF' },
        ]}
      />
      <Header isHome={isHome} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

GMap.defaultProps = {
  isHome: false,
}

GMap.propTypes = {
  isHome: PropTypes.bool,
  children: PropTypes.node,
}

export default Layout
