import React from "react"
import PropTypes from "prop-types"

import HeadMeta from "../HeadMeta"
import Header from "../../components/Header"
import Main from "../../components/Main"
import Footer from "../../components/Footer"
import Loading from "../../components/Loading"

import styles from "./index.css"

function Page(props) {
  const { __filename, isLoading, children } = props

  return (
    <div className={styles.root}>
      <HeadMeta {...props} />
      <Header __filename={__filename} />
      <Main>
        {isLoading ? <Loading /> : children}
      </Main>
      <Footer />
    </div>
  )
}

Page.propTypes = {
  __filename: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
}

export default Page
