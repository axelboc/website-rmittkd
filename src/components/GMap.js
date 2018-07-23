import React from 'react'
import PropTypes from 'prop-types'

const GMAPS_API_URL = 'https://maps.googleapis.com/maps/api/staticmap'

function GMap(props) {
  const { detailled, dimensions, focus, addresses } = props
  const [width, height] = dimensions

  // https://snazzymaps.com/style/8083/mymap
  const mapStyles = [
    'element:labels.text.fill|color:0xffffff',
    'element:labels.text.stroke|color:0x000000|lightness:13',
    'feature:administrative|element:geometry.fill|color:0x000000',
    'feature:administrative|element:geometry.stroke|color:0x144b53|lightness:14|weight:1.4',
    'feature:administrative.locality|visibility:on',
    'feature:administrative.locality|element:labels.icon|visibility:on',
    'feature:landscape|color:0x08304b',
    'feature:poi|visibility:off',
    'feature:road|element:labels|visibility:off',
    'feature:road.highway|element:geometry.fill|color:0x000000',
    'feature:road.highway|element:geometry.stroke|color:0x0b434f|lightness:25',
    'feature:road.local|element:geometry|color:0x000000',
    'feature:transit|visibility:off',
    'feature:water|color:0x021019',
    ...(detailled ? [
      'feature:road.arterial|element:geometry.fill|color:0x000000',
      'feature:road.arterial|element:geometry.stroke|color:0x0b3d51|lightness:16',
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
