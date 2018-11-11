import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PageMeta from '../components/PageMeta'
import Banner from '../components/Banner/Banner'
import Section from '../components/Section/Section'
import Location from '../components/Location/Location'
import Fees from '../components/Fees/Fees'
import Button from '../components/Button/Button'
import RelatedLinks from '../components/RelatedLinks/RelatedLinks'

export default class IndexPage extends React.Component {
  render() {
    const { data, location: { pathname } } = this.props

    const { frontmatter, html } = data.page.edges[0].node
    const { metaDescription, trainIntro, locations, feesIntro, fees, relatedLinks } = frontmatter

    return (
      <Layout isHome>
        <PageMeta
          isHome
          description={metaDescription}
          path={pathname}
        />
        <Banner
          heading="ITF Taekwon&#8209;Do"
          intro={html}
          variant="home"
        />
        <Section heading="Train with us" intro={trainIntro}>
          {locations.map(item => <Location key={item.suburb} {...item} />)}
        </Section>
        <Section heading="Membership fees" intro={feesIntro} variant="alt1">
          <Fees fees={fees} />
          <Button to="https://rmitlink.rmit.edu.au/Clubs/taekwondoitf" centred>
            Choose your membership
          </Button>
        </Section>
        <Section useDiv spaced>
          <RelatedLinks items={relatedLinks} />
        </Section>
      </Layout>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    page: allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/\\/index.md$/"}}) {
      edges {
        node {
          frontmatter {
            metaDescription
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
            }
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
