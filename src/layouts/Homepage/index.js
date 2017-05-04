import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Root from "../../components/Root"

// import styles from "./index.css"

const Homepage = (props, { metadata }) => {
  const { head } = props;
  const { siteTitle, siteUrl } = metadata;
  
  return (
    <Root head={head}>
      <Helmet
        title={siteTitle}
        meta={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: siteTitle },
          { property: "og:url", content: siteUrl },
        ]}
      />
    </Root>
  )
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired
}

Homepage.contextTypes = {
  metadata: PropTypes.shape({
    siteTitle: PropTypes.string.isRequired,
    siteUrl: PropTypes.string.isRequired,
    socialImage: PropTypes.string.isRequired,
  }).isRequired,
}

export default Homepage
