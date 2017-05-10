import React from "react"
import PropTypes from "prop-types"

import styles from "./index.css"

function Main(props) {
  const { children } = props

  return (
    <div className={ styles.main }>
      {children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

export default Main
