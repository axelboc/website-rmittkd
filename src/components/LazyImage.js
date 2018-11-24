import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LazyImage extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false, isLoaded: false }
    this.onLoad = this.onLoad.bind(this)
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }

  onLoad() {
    this.setState({ isLoaded: true })
  }

  render() {
    const { src, srcSet, alt, ...otherProps } = this.props
    const { isMounted, isLoaded } = this.state
    const { height } = otherProps

    return (
      <img
        {...(isMounted ? { src, srcSet } : {})}
        {...otherProps}
        alt={alt}
        style={!isLoaded ? { height: `${height}px` } : null}
        onLoad={this.onLoad}
      />
    )
  }
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  alt: PropTypes.string.isRequired,
}

export default LazyImage
