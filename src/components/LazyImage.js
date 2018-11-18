import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LazyImage extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }

  render() {
    const { src, srcSet, alt, ...otherProps } = this.props
    const { isMounted } = this.state

    return (
      <img
        {...(isMounted ? { src, srcSet } : {})}
        {...otherProps}
        alt={alt}
      />
    )
  }
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

export default LazyImage
