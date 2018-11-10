import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/index.css'

function Layout(props) {
  const { children, location } = props

  return (
    <div>
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
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,400,600' },
          { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
          { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
          { rel: 'shortcut icon', href: '/favicon.ico' },
          { rel: 'publisher', href: 'https://www.google.com/+RmittkdCHITF' },
        ]}
      />
      <Header home={location.pathname === '/'} />
      <main>
        {children()}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
