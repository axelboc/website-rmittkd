import React from 'react'
import PageMeta from '../components/PageMeta'

export default function TkdPage(props) {
  const { frontmatter, html, location } = props.data.allMarkdownRemark.edges[0].node
  const { description } = frontmatter

  return (
    <div>
      <PageMeta
        title="What is Taekwon-Do?"
        description={description}
        path={location.pathname}
      />
      What is Taekwon-Do?
    </div>
  )
}

export const query = graphql`
  query TkdQuery {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/tkd\\.md$/"}}) {
      edges {
        node {
          frontmatter {
            metaDescription
            video
          }
          html
        }
      }
    }
  }
`
