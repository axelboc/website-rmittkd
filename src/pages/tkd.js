import React from 'react'

import PageMeta from '../components/PageMeta'
import Banner from '../components/Banner'
import Section from '../components/Section'
import RelatedLinks from '../components/RelatedLinks'

import styles from '../styles/pages/tkd.module.css'

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
      <Banner
        heading="What is Taekwon-Do?"
        intro={html}
        variant="tkd"
      />
      <Section useDiv spaced bg="alt">
        <div className={styles.embed}>
          <iframe className={styles.iframe} src={video} frameBorder="0" allowFullScreen></iframe>
        </div>
      </Section>
      <Section useDiv spaced>
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
