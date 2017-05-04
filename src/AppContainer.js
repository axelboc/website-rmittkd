import React from "react"
import PropTypes from "prop-types"

import "./index.global.css"

function AppContainer(props) {
  return (
    <div>
      { props.children }
    </div>
  )
}

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
