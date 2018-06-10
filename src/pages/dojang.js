import React from 'react'

import PageMeta from '../components/PageMeta'
import Banner from '../components/Banner'
import Section from '../components/Section'
import Instructor from '../components/Instructor'
import LocalClubs from '../components/LocalClubs'
import RelatedLinks from '../components/RelatedLinks'

import styles from '../styles/pages/dojang.module.css'

export default function DojangPage(props) {
  const { data, location: { pathname } } = props
  const { relatedLinks } = data.site.siteMetadata

  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node
  const {
    metaDescription, instructorsIntro, instructors,
    clubsIntro, clubs
  } = frontmatter

  const localClubs = clubs.filter(club => club.inMelbourne)
  const otherClubs = clubs.filter(club => !club.inMelbourne)

  return (
    <div>
      <PageMeta
        title="Our Dojang"
        description={metaDescription}
        path={pathname}
      />
      <div className={styles.banner} />
      <Banner
        heading="Our Dojang"
        intro={html}
        variant="dojang"
      />
      <Section heading="Instructors" intro={instructorsIntro} bg="alt">
        <div className={styles.instructors}>
          {instructors.map(item => (
            <Instructor
              key={item.name}
              total={instructors.length}
              {...item}
            />
          ))}
        </div>
      </Section>
      <Section heading="Associated clubs" intro={clubsIntro} bg="alt2">
        <div>
          <LocalClubs clubs={localClubs}  />
          <ul>
            {otherClubs.map(club => {
              const { name, url, location, state } = club
              return (
                <li key={name}>
                  <a href={url}>
                    <p>{name}</p>
                    <p>{location} {state}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </Section>
      <Section useDiv spaced>
        <RelatedLinks items={Object.keys(relatedLinks).map(key => relatedLinks[key])} />
      </Section>
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
              url
            }
          }
          html
        }
      }
    }
    site {
      siteMetadata {
        relatedLinks {
          train { label, href, img }
          membership { label, href, img }
          tkd { label, href, img }
        }
      }
    }
  }
`
