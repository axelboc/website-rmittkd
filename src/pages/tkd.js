import React from 'react'
import Helmet from 'react-helmet'

export default class IndexPage extends React.Component {
  render() {
    const { frontmatter: fm, html } = this.props.data.allMarkdownRemark.edges[0].node
    console.log(fm, html)
    return (
      <div>What is Taekwon-Do?</div>
    )
  }
}

export const query = graphql`
  query TKDQuery {
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
