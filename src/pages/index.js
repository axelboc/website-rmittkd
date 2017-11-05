import React from 'react'
import PageMeta from '../components/PageMeta'
import Location from '../components/Location'
import Fees from '../components/Fees'
import RelatedLink from '../components/RelatedLink'

export default function IndexPage(props) {
  const { location: { pathname } } = props
  const { frontmatter, html } = props.data.allMarkdownRemark.edges[0].node
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
      <div>
        <h1>RMIT ITF Taekwon-Do</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <section>
        <h2>Train with us</h2>
        <p dangerouslySetInnerHTML={{ __html: trainIntro }}></p>
        {locations.map(item => <Location key={item.suburb} {...item} />)}
      </section>
      <section>
        <h2>Membership fees</h2>
        <p dangerouslySetInnerHTML={{ __html: feesIntro }}></p>
        <Fees studentFees={studentFees} publicFees={publicFees} />
        <a href="https://rmitlink.rmit.edu.au/Clubs/taekwondo-itf">Choose your membership</a>
      </section>
      <ul>
        <li><RelatedLink to="/tkd">What is Taekwon-Do?</RelatedLink></li>
        <li><RelatedLink to="/dojang">Meet our instructors</RelatedLink></li>
        <li><RelatedLink to="/dojang">Find our affiliated clubs</RelatedLink></li>
      </ul>
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
  }
`
