import React from 'react'

import styles from './tkd.module.css'
import PageMeta from '../components/PageMeta'
import Section from '../components/Section'
import RelatedLinks from '../components/RelatedLinks'

export default function TkdPage(props) {
  const { data, location: { pathname } } = props
  const { relatedLinks } = data.site.siteMetadata

  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node
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
      <Section useDiv>
        <div className={styles.embed}>
          <iframe className={styles.iframe} src={video} frameBorder="0" allowFullScreen></iframe>
        </div>
      </Section>
      <Section useDiv>
        <RelatedLinks items={Object.keys(relatedLinks).map(key => relatedLinks[key])} />
      </Section>
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
    site {
      siteMetadata {
        relatedLinks {
          train { label, href, img }
          instructors { label, href, img }
          clubs { label, href, img }
        }
      }
    }
  }
`
