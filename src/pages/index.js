import React from 'react'
import Helmet from 'react-helmet'

export default class IndexPage extends React.Component {
  render() {
    const { frontmatter: fm, html } = this.props.data.allMarkdownRemark.edges[0].node
    console.log(fm, html)
    return (
      <div>RMIT ITF Taekwon-Do</div>
    )
  }
}

export const query = graphql`
  query HomepageQuery {
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
