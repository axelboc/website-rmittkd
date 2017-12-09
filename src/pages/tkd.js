import React from 'react'

import PageMeta from '../components/PageMeta'
import Banner from '../components/Banner'
import Section from '../components/Section'
import RelatedLinks from '../components/RelatedLinks'

import styles from './styles/tkd.module.css'
import bannerImg from '../images/gen-choi.png'

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
        image={bannerImg}
      />
      <Section useDiv spaced>
        <div className={styles.embed}>
          <iframe className={styles.iframe} src={video} frameBorder="0" allowFullScreen></iframe>
        </div>
      </Section>
      <Section altBg useDiv spaced>
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
