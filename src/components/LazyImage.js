import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

function LazyImage(props) {
  const { src, srcSet, alt, ...otherProps } = props
  const { height } = otherProps

  const [isMounted, setMounted] = useState(false)
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <img
      {...(isMounted ? { src, srcSet } : {})}
      {...otherProps}
      alt={alt}
      style={!isLoaded ? { height: `${height}px` } : null}
      onLoad={() => {
        setLoaded(true)
      }}
    />
  )
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  alt: PropTypes.string.isRequired,
}

export default LazyImage
