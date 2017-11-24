import React from 'react'
import Script from 'react-load-script';

import PageMeta from '../components/PageMeta'
import Section from '../components/Section'
import Location from '../components/Location'
import Fees from '../components/Fees'
import RelatedLinks from '../components/RelatedLinks'

import styles from './styles/index.module.css'

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
    );
  }
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
