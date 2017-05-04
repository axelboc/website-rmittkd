import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function DefaultHeadMeta(props, { metadata }) {
  const { head } = props
  const { socialImage, publisher } = metadata

  return (
    <div hidden>
      <Helmet
        htmlAttributes={{
          lang: "en-AU",
          prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#",
        }}
        meta={[
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "description", content: head.description },
          { property: "og:description", content: head.description },
          { property: "og:image", content: head.socialImage || socialImage },
          { property: "og:locale", content: "en_GB" },
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

DefaultHeadMeta.propTypes = {
  head: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.shape({
    socialImage: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
  }).isRequired,
}

export default DefaultHeadMeta
