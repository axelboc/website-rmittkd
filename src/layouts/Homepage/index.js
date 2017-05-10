import React from "react"
import PropTypes from "prop-types"
import { BodyContainer } from "phenomic"

import Page from "../Page"

// import styles from "./index.css"

const Homepage = (props) => {
  const { body } = props;

  return (
    <Page {...props}>
      {body && <BodyContainer>{body}</BodyContainer>}
    </Page>
  )
}

Homepage.propTypes = {
  body: PropTypes.string,
}

export default Homepage
