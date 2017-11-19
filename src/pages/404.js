import React from 'react'

export default function NotFoundPage(props) {
  const { location } = props;

  return (
    <h1>{location.pathname} not found </h1>
  )
}
