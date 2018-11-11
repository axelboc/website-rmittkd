import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PageMeta from '../components/PageMeta'
import Banner from '../components/Banner'
import Section from '../components/Section'
import RelatedLinks from '../components/RelatedLinks'

import styles from '../styles/pages/tkd.module.css'

export default function TkdPage(props) {
  const { data, location: { pathname } } = props

  const { frontmatter, html } = data.page.edges[0].node
  const { metaDescription, video, relatedLinks } = frontmatter

  // Hide related videos and YouTube branding
  const videoSrc = `${video.split('?')[0]}?rel=0&modestbranding=1`

  return (
    <Layout>
      <PageMeta
        title="What is Taekwon-Do?"
        description={metaDescription}
        path={pathname}
      />
      <Banner
        heading="What is Taekwon&#8209;Do?"
        intro={html}
        variant="tkd"
      />
      <Section useDiv spaced variant="alt1">
        <div className={styles.embed}>
          <iframe
            className={styles.iframe}
            src={videoSrc}
            title="video"
            allowFullScreen
          ></iframe>
        </div>
      </Section>
      <Section useDiv spaced>
        <RelatedLinks items={relatedLinks} />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query TkdQuery {
    page: allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/\\/tkd.md$/"}}) {
      edges {
        node {
          frontmatter {
            metaDescription
            video
            relatedLinks {
              title
              path
              img {
                childImageSharp {
                  fluid(maxWidth: 338) {
                    src
                  }
                }
              }
            }
          }
          html
        }
      }
    }
  }
`
