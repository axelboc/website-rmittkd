import React from 'react'
import Helmet from 'react-helmet'

export default function TkdPage(props) {
  const { frontmatter: fm, html } = props.data.allMarkdownRemark.edges[0].node

  return (
    <div>What is Taekwon-Do?</div>
  )
}

export const query = graphql`
  query TkdQuery {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/tkd\\.md$/"}}) {
      edges {
        node {
          frontmatter {
            video
          }
          html
        }
      }
    }
  }
`
