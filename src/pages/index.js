import React from 'react'

import styles from './index.module.css'
import PageMeta from '../components/PageMeta'
import Section from '../components/Section'
import Location from '../components/Location'
import Fees from '../components/Fees'
import RelatedLinks from '../components/RelatedLinks'

export default function IndexPage(props) {
  const { data, location: { pathname } } = props
  const { relatedLinks } = data.site.siteMetadata

  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node
  const {
    metaDescription, trainIntro, locations,
    feesIntro, studentFees, publicFees
  } = frontmatter

  return (
    <div>
      <PageMeta
        isHome
        description={metaDescription}
        path={pathname}
      />
      <div className={styles.banner}>
        <div className={styles.bannerInner}>
          <h1 className={styles.title}>ITF Taekwon-Do</h1>
          <p className={styles.sub}>RMIT University Club</p>
          <div className={styles.intro} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      <Section heading="Train with us" intro={trainIntro} altBg>
        {locations.map(item => <Location key={item.suburb} {...item} />)}
      </Section>
      <Section heading="Membership fees" intro={feesIntro}>
        <Fees studentFees={studentFees} publicFees={publicFees} />
        <a href="https://rmitlink.rmit.edu.au/Clubs/taekwondo-itf">Choose your membership</a>
      </Section>
      <Section useDiv>
        <RelatedLinks items={Object.keys(relatedLinks).map(key => relatedLinks[key])} />
      </Section>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/home\\.md$/"}}) {
      edges {
        node {
          frontmatter {
            metaDescription
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
    site {
      siteMetadata {
        relatedLinks {
          tkd { label, href, img }
          instructors { label, href, img }
          clubs { label, href, img }
        }
      }
    }
  }
`
