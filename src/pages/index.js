import React from 'react'
import Script from 'react-load-script';

import PageMeta from '../components/PageMeta'
import Section from '../components/Section'
import Location from '../components/Location'
import Fees from '../components/Fees'
import Button from '../components/Button'
import RelatedLinks from '../components/RelatedLinks'

import styles from '../styles/pages/index.module.css'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data, location: { pathname } } = this.props
    const { relatedLinks } = data.site.siteMetadata

    const { frontmatter, html } = data.allMarkdownRemark.edges[0].node
    const { metaDescription, trainIntro, locations, feesIntro, fees } = frontmatter

    return (
      <div>
        <PageMeta
          isHome
          description={metaDescription}
          path={pathname}
        />
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.title}>ITF Taekwon-Do</h1>
            <p className={styles.sub}>RMIT University Club</p>
            <div className={styles.intro} dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        <Section heading="Train with us" intro={trainIntro}>
          {locations.map(item => <Location key={item.suburb} {...item} />)}
        </Section>
        <Section heading="Membership fees" intro={feesIntro} bg="alt">
          <Fees fees={fees} />
          <Button to="https://rmitlink.rmit.edu.au/Clubs/taekwondoitf" centred>
            Choose your membership
          </Button>
        </Section>
        <Section useDiv spaced>
          <RelatedLinks items={Object.keys(relatedLinks).map(key => relatedLinks[key])} />
        </Section>
      </div>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/index\\.md$/"}}) {
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
