import { graphql } from 'gatsby'
import React from 'react'

import Banner from '../components/Banner/Banner'
import Button from '../components/Button/Button'
import Layout from '../components/Layout'
import PageMeta from '../components/PageMeta'
import RelatedLinks from '../components/RelatedLinks/RelatedLinks'
import Section from '../components/Section/Section'
import styles from './contact.module.css'

export default function ContactPage(props) {
  const { data, location } = props // eslint-disable-line react/prop-types
  const { frontmatter, html } = data.page.edges[0].node
  const {
    metaDescription,
    metaImage,
    faqIntro,
    faq,
    relatedLinks,
  } = frontmatter

  return (
    <Layout>
      <PageMeta
        title="Get in touch"
        description={metaDescription}
        image={metaImage.childImageSharp.original.src}
        path={location.pathname}
      />
      <Banner heading="Get in touch" intro={html} variant="contact" />
      <Section
        heading="Frequently Asked Questions"
        intro={faqIntro}
        variant="secondary"
      >
        <div className={styles.questions}>
          {faq.map(({ question, answer }) => (
            <div key={question} className={styles.question}>
              <h2 className={styles.heading}>{question}</h2>
              <p
                className={styles.answer}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
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
    page: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//contact.md$/" } }
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
