import React from 'react'

import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <Banner
        heading="Page not found"
        intro="We'd usually recommend perseverance, one of the tenets of Taekwon-Do, but there's just nothing here. If you think something's broken, <a href='/contact'>drop us a line</a>!"
        variant="404"
      />
    </Layout>
  )
}
