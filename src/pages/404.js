import React from 'react'
import Layout from '../components/Layout'

export default function NotFoundPage(props) {
  const { location } = props;

  return (
    <Layout>
      <h1>{location.pathname} not found </h1>
    </Layout>
  )
}
