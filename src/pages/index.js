import React from 'react'
import PageMeta from '../components/PageMeta'

export default function IndexPage(props) {
  const { frontmatter, html, location } = props.data.allMarkdownRemark.edges[0].node
  const { description } = frontmatter

  return (
    <div>
      <PageMeta
        isHome
        description={description}
        path={location.pathname}
      />
      RMIT ITF Taekwon-Do
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/home\\.md$/"}}) {
      edges {
        node {
          frontmatter {
            metaDescription
            trainIntro
            locations {
              suburb
              address
              times {
                days
                from
                to
              }
            }
            feesIntro
            studentFees {
              semester
              year
            }
            publicFees {
              semester
              year
            }
          }
          html
        }
      }
    }
  }
`
