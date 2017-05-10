import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { joinUri } from "phenomic"

function HeadMeta(props, { metadata }) {
  const { __url, head, isLoading } = props
  const { siteTitle, siteUrl, socialImage, publisher } = metadata

  const isHome = __url === '/'
  const title = `${isLoading || isHome ? '' : `${head.title} | `}${siteTitle}`

  return (
    <div hidden>
      <Helmet
        htmlAttributes={{
          lang: "en-AU",
          prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#",
        }}
        title={title}
        meta={[
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "description", content: head.description },
          { property: "og:type", content: (isHome ? "website" : "article") },
          { property: "og:title", content: title },
          { property: "og:description", content: head.description },
          { property: "og:url", content: joinUri(siteUrl, __url) },
          { property: "og:image", content: head.socialImage || socialImage },
          { property: "og:locale", content: "en_GB" },
          ...(!isHome && [{ property: "og:site_name", content: siteUrl }]),
        ]}
        link={[
          { rel: "icon", type: "image/png", href: "/assets/favicon-32x32.png", sizes: "32x32" },
          { rel: "icon", type: "image/png", href: "/assets/favicon-16x16.png", sizes: "16x16" },
          { rel: "shortcut icon", href: "/assets/favicon.ico" },
          { rel: "publisher", href: publisher },
        ]}
        script={[
          { src: "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&flags=gated" },
        ]}
      />
    </div>
  )
}

HeadMeta.propTypes = {
  __url: PropTypes.string,
  head: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool,
}

HeadMeta.contextTypes = {
  metadata: PropTypes.shape({
    siteTitle: PropTypes.string.isRequired,
    siteUrl: PropTypes.string.isRequired,
    socialImage: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
  }).isRequired,
}

export default HeadMeta
