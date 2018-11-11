import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageMeta from '../components/PageMeta'
import Banner from '../components/Banner/Banner'
import Section from '../components/Section/Section'
import Button from '../components/Button/Button'
import RelatedLinks from '../components/RelatedLinks/RelatedLinks'

import styles from './contact.module.css'

export default function DojangPage(props) {
  const { data, location: { pathname } } = props

  const { frontmatter, html } = data.page.edges[0].node
  const { metaDescription, faqIntro, faq, relatedLinks } = frontmatter

  return (
    <Layout>
      <PageMeta
        title="Get in touch"
        description={metaDescription}
        path={pathname}
      />
      <Banner
        heading="Get in touch"
        intro={html}
        variant="contact"
      />
      <Section heading="Frequently Asked Questions" intro={faqIntro} variant="secondary">
        <div className={styles.questions}>
          {faq.map(({ question, answer }) => (
            <div class={styles.question}>
              <h2 className={styles.heading}>{question}</h2>
              <p className={styles.answer} dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
          ))}
        </div>
        <Button to="https://rmittkd.typeform.com/to/FJ6SSX" centred>
          Get in touch
        </Button>
      </Section>
      <Section useDiv spaced>
        <RelatedLinks items={relatedLinks} />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ContactQuery {
    page: allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/\\/contact.md$/"}}) {
      edges {
        node {
          frontmatter {
            metaDescription
            faqIntro
            faq {
              question
              answer
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
