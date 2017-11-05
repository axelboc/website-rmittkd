import React from 'react'
import PageMeta from '../components/PageMeta'
import RelatedLink from '../components/RelatedLink'

export default function TkdPage(props) {
  const { location: { pathname } } = props
  const { frontmatter, html } = props.data.allMarkdownRemark.edges[0].node
  const { metaDescription, video } = frontmatter

  return (
    <div>
      <PageMeta
        title="What is Taekwon-Do?"
        description={metaDescription}
        path={pathname}
      />
      <div>
        <h1>What is Taekwon-Do?</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div>
        <iframe src={video} frameBorder="0" allowFullScreen></iframe>
      </div>
      <ul>
        <li><RelatedLink to="/">Train with us</RelatedLink></li>
        <li><RelatedLink to="/dojang">Meet our instructors</RelatedLink></li>
        <li><RelatedLink to="/dojang">Find our affiliated clubs</RelatedLink></li>
      </ul>
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
