import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LayoutMeta from '../components/LayoutMeta'

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <LayoutMeta />
      <Header />
      <main>
        {children()}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
