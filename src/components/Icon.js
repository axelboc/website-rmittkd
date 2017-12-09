import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { className, name, width, height } = props

  return (
    <svg
      className={className}
      width={width}
      height={height}
      focusable="false"
      role="presentation"
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Icon
