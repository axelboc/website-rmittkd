import React from 'react'
import Layout from '../components/layout'

export default function NotFoundPage(props) {
  const { location } = props;

  return (
    <Layout>
      <h1>{location.pathname} not found </h1>
    </Layout>
  )
}
