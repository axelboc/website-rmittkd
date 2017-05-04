import React from "react"
import PropTypes from "prop-types"

import DefaultHeadMeta from "../DefaultHeadMeta"
import Header from "../Header"
import Footer from "../Footer"

import styles from "./index.css"

function Root(props) {
  const { head, children } = props

  return (
    <div className={styles.root}>
      <DefaultHeadMeta head={head} />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Root.propTypes = {
  head: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export default Root
