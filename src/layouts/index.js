import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sprite from '../components/Sprite'

import 'normalize.css'
import './styles/vars.css'
import './styles/base.css'
import './styles/utils.css'

function Layout(props) {
  const { children } = props;

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
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:100,400,600,700' },
          { rel: 'icon', type: 'image/png', href: '/assets/favicon-32x32.png', sizes: '32x32' },
          { rel: 'icon', type: 'image/png', href: '/assets/favicon-16x16.png', sizes: '16x16' },
          { rel: 'shortcut icon', href: '/assets/favicon.ico' },
          { rel: 'publisher', href: 'https://www.google.com/+RmittkdCHITF' },
        ]}
      />
      <Header />
      <main>
        {children()}
      </main>
      <Footer />
      <Sprite />
    </div>
  )
}

export default Layout
