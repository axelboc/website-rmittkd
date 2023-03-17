import { graphql } from 'gatsby'
import React from 'react'

import Banner from '../components/Banner/Banner'
import Button from '../components/Button/Button'
import Fees from '../components/Fees/Fees'
import Layout from '../components/Layout'
import Location from '../components/Location/Location'
import PageMeta from '../components/PageMeta'
import RelatedLinks from '../components/RelatedLinks/RelatedLinks'
import Section from '../components/Section/Section'

export default function IndexPage(props) {
  const { data, location } = props // eslint-disable-line react/prop-types
  const { frontmatter, html } = data.page.edges[0].node
  const {
    metaDescription,
    metaImage,
    trainIntro,
    locations,
    feesIntro,
    fees,
    relatedLinks,
  } = frontmatter

  return (
    <Layout isHome>
      <PageMeta
        isHome
        description={metaDescription}
        image={metaImage.childImageSharp.original.src}
        path={location.pathname}
      />
      <Banner heading="ITF Taekwon&#8209;Do" intro={html} variant="home" />
      <Section heading="Train with us" intro={trainIntro}>
        {locations.map(item => (
          <Location key={item.suburb} {...item} />
        ))}
      </Section>
      <Section heading="Membership fees" intro={feesIntro} variant="secondary">
        <Fees fees={fees} />
        <Button to="https://rmitlink.rmit.edu.au/Clubs/taekwondoitf" centred>
          Choose your membership
        </Button>
      </Section>
      <Section useDiv spaced>
        <RelatedLinks items={relatedLinks} />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    page: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//index.md$/" } }
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
            trainIntro
            locations {
              suburb
              location
              address
              times {
                days
                from
                to
              }
            }
            feesIntro
            fees {
              who
              year
              semester
              yearLabel
              semesterLabel
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
