import React from "react"
import PropTypes from "prop-types"

import Page from "../Page"

// import styles from "./index.css"

function PageError(props) {
  const { error, errorText } = props

  return (
    <Page head={{
      title: "404"
    }}>
      <p>{error}: {errorText}</p>
    </Page>
  )
}

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError
