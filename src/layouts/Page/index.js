import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { joinUri } from "phenomic"

import Root from "../../components/Root"

// import styles from "./index.css"

function Page(props, { metadata }) {
  const { __url, head } = props;
  const { siteTitle, siteUrl } = metadata;

  const title = `${head.title} | ${siteTitle}`;

  return (
    <Root head={head}>
      <Helmet
        title={title}
        meta={[
          { property: "og:type", content: "article" },
          { property: "og:title", content: title },
          { property: "og:url", content: joinUri(siteUrl, __url) },
          { property: "og:site_name", content: siteUrl },
        ]}
      />
    </Root>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,

  __url: PropTypes.string,
  head: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
}

Page.contextTypes = {
  metadata: PropTypes.shape({
    siteTitle: PropTypes.string.isRequired,
    siteUrl: PropTypes.string.isRequired,
  }).isRequired,
}

export default Page
