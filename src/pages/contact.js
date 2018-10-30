import React from 'react'

import PageMeta from '../components/PageMeta'
import Banner from '../components/Banner'
import Section from '../components/Section'
import Button from '../components/Button'
import RelatedLinks from '../components/RelatedLinks'

import styles from '../styles/pages/contact.module.css'

export default function DojangPage(props) {
  const { data, location: { pathname } } = props

  const { frontmatter, html } = data.page.edges[0].node
  const { metaDescription, faqIntro, faq, relatedLinks } = frontmatter

  return (
    <div>
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
      <Section heading="Frequently Asked Questions" intro={faqIntro} bg="alt">
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
    </div>
  )
}

export const query = graphql`
  query ContactQuery {
    page: allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/contact\\.md$/"}}) {
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
                  sizes(maxWidth: 338) {
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
