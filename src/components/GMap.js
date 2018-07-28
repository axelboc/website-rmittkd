import React from 'react'
import PropTypes from 'prop-types'

const GMAPS_API_URL = 'https://maps.googleapis.com/maps/api/staticmap'

function GMap(props) {
  const { detailled, dimensions, focus, addresses } = props
  const [width, height] = dimensions

  // https://snazzymaps.com/style/16237/faded-opaque-with-natural-tones
  const mapStyles = [
    'feature:administrative.locality|element:labels.text.fill|color:0x2f445c|saturation:0',
    'feature:administrative.neighborhood|element:labels.text.fill|color:0xc9955a|saturation:0',
    'feature:landscape.man_made|element:geometry.fill|color:0xede0d5|saturation:0',
    'feature:landscape.natural|element:geometry.fill|color:0xe2dace|saturation:0',
    'feature:landscape.natural.landcover|element:geometry.fill|color:0xecd9be|saturation:0',
    'feature:poi|visibility:off',
    'feature:road.arterial|element:geometry.fill|color:0xecb679|saturation:0',
    'feature:road.highway|element:geometry.fill|color:0xc9955a|saturation:0',
    'feature:road.highway|element:geometry.stroke|visibility:simplified',
    'feature:road.local|element:geometry.fill|color:0xbbbbbb|saturation:0',
    'feature:water|element:geometry.fill|color:0x9dbcce|saturation:0',
    'feature:water|element:labels.text.stroke|visibility:simplified',
    'feature:road|element:labels|visibility:off',
    ...(detailled ? [
    ] : [
      'feature:road.arterial|visibility:off',
    ])
  ]

  const mapParams = [
    `size=${dimensions.join('x')}`,
    `key=${process.env.GATSBY_GMAPS_KEY}`,
    ...(focus ? [`visible=${encodeURIComponent(focus)}`] : []),
    ...addresses.map(str => `markers=${encodeURIComponent(str)}`),
    ...mapStyles.map(str => `style=${encodeURIComponent(str)}`),
  ].join('&')

  return (
    <img
      src={`${GMAPS_API_URL}?${mapParams}`}
      width={width}
      height={height}
      alt=""
    />
  )
}

GMap.defaultProps = {
  detailled: false,
  focus: 'Melbourne VIC 3000, Australia',
}

GMap.propTypes = {
  detailled: PropTypes.bool,
  dimensions: PropTypes.arrayOf(PropTypes.number).isRequired,
  focus: PropTypes.oneOf(PropTypes.string, PropTypes.bool),
  addresses: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default GMap
