import React from 'react'
import PageMeta from '../components/PageMeta'

export default function DojangPage(props) {
  const { frontmatter, html, location } = props.data.allMarkdownRemark.edges[0].node
  const { description } = frontmatter

  return (
    <div>
      <PageMeta
        title="Our Dojang"
        description={description}
        path={location.pathname}
      />
      Our Dojang
    </div>
  )
}

export const query = graphql`
  query DojangQuery {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/dojang\\.md$/"}}) {
      edges {
        node {
          frontmatter {
            metaDescription
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
