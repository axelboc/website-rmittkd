import '../styles/index.css' // import first for proper ordering of styles

import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout(props) {
  const { isHome, children } = props

  return (
    <>
      <Helmet>
        <html lang="en-AU" prefix="og: http://ogp.me/ns#" />
        <meta property="og:locale" content="en_GB" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="publisher" href="https://www.google.com/+RmittkdCHITF" />
      </Helmet>

      <Header isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  isHome: false,
}

Layout.propTypes = {
  isHome: PropTypes.bool,
  children: PropTypes.node,
}

export default Layout
