import React from 'react'
import Helmet from 'react-helmet'

export default class IndexPage extends React.Component {
  render() {
    const { frontmatter: fm, html } = this.props.data.allMarkdownRemark.edges[0].node
    console.log(fm, html)
    return (
      <div>Our Dojang</div>
    )
  }
}

export const query = graphql`
  query DojangQuery {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/dojang\\.md$/"}}) {
      edges {
        node {
          frontmatter {
            instructorsIntro
            instructors {
              name
              degree
              bio
            }
            clubsIntro
            clubs {
              name
              location
              inMelbourne
              state
              links {
                type
                url
              }
            }
          }
          html
        }
      }
    }
  }
`
