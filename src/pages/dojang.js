import { graphql } from 'gatsby'
import React from 'react'

import Banner from '../components/Banner/Banner'
import ClubsGroup from '../components/ClubsGroup/ClubsGroup'
import Instructor from '../components/Instructor/Instructor'
import Layout from '../components/Layout'
import PageMeta from '../components/PageMeta'
import RelatedLinks from '../components/RelatedLinks/RelatedLinks'
import Section from '../components/Section/Section'
import styles from './dojang.module.css'

export default function DojangPage(props) {
  const { data, location } = props // eslint-disable-line react/prop-types
  const { frontmatter, html } = data.page.edges[0].node
  const {
    metaDescription,
    metaImage,
    instructorsIntro,
    instructors,
    clubsIntro,
    localClubs,
    otherClubs,
    relatedLinks,
  } = frontmatter

  return (
    <Layout>
      <PageMeta
        title="Our Dojang"
        description={metaDescription}
        image={metaImage.childImageSharp.original.src}
        path={location.pathname}
      />
      <Banner heading="Our Dojang" intro={html} variant="dojang" />
      <Section
        heading="Instructors"
        intro={instructorsIntro}
        variant="secondary"
      >
        <div className={styles.instructors}>
          {instructors.map(item => (
            <Instructor key={item.name} total={instructors.length} {...item} />
          ))}
        </div>
      </Section>
      <Section heading="Associated clubs" intro={clubsIntro} variant="ternary">
        <div className={styles.clubs}>
          <ClubsGroup heading="Greater Melbourne" clubs={localClubs} doFocus />
          <ClubsGroup heading="Australia" clubs={otherClubs} />
        </div>
      </Section>
      <Section useDiv spaced>
        <RelatedLinks items={relatedLinks} />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query DojangQuery {
    page: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//dojang.md$/" } }
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
            instructorsIntro
            instructors {
              name
              degree
              bio
              photo {
                childImageSharp {
                  fixed(width: 560, height: 350, quality: 85) {
                    src
                    srcSet
                    width
                    height
                  }
                }
              }
            }
            clubsIntro
            localClubs {
              name
              url
              city
              address
            }
            otherClubs {
              name
              url
              city
              state
            }
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
