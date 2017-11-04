import React from 'react'
import Helmet from 'react-helmet'

export default function IndexPage(props) {
  const { frontmatter: fm, html } = props.data.allMarkdownRemark.edges[0].node

  return (
    <div>RMIT ITF Taekwon-Do</div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/home\\.md$/"}}) {
      edges {
        node {
          frontmatter {
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
