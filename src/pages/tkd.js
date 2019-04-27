import { graphql } from 'gatsby'
import React from 'react'

import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout'
import PageMeta from '../components/PageMeta'
import RelatedLinks from '../components/RelatedLinks/RelatedLinks'
import Section from '../components/Section/Section'
import styles from './tkd.module.css'

export default function TkdPage(props) {
  const { data, location } = props // eslint-disable-line react/prop-types
  const { frontmatter, html } = data.page.edges[0].node
  const { metaDescription, metaImage, video, relatedLinks } = frontmatter

  // Hide related videos and YouTube branding
  const videoSrc = `${video.split('?')[0]}?rel=0&modestbranding=1`

  return (
    <Layout>
      <PageMeta
        title="What is Taekwon-Do?"
        description={metaDescription}
        image={metaImage.childImageSharp.original.src}
        path={location.pathname}
      />
      <Banner heading="What is Taekwon&#8209;Do?" intro={html} variant="tkd" />
      <Section useDiv spaced variant="secondary">
        <div className={styles.embed}>
          <iframe
            className={styles.iframe}
            src={videoSrc}
            title="video"
            allowFullScreen
          />
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
    page: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//tkd.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            metaDescription
            metaImage {
              childImageSharp {
                original {
                  src
                }
              }
            }
            video
            relatedLinks {
              title
              path
              img {
                childImageSharp {
                  fixed(width: 345, height: 194, quality: 85) {
                    src
                    srcSet
                    width
                    height
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
