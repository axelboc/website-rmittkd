import React from 'react'
import PageMeta from '../components/PageMeta'
import Instructor from '../components/Instructor'
import LocalClubs from '../components/LocalClubs'
import RelatedLink from '../components/RelatedLink'

export default function DojangPage(props) {
  const { location: { pathname } } = props
  const { frontmatter, html } = props.data.allMarkdownRemark.edges[0].node
  const {
    metaDescription, instructorsIntro, instructors,
    clubsIntro, clubs
  } = frontmatter

  const localClubs = clubs.filter(club => club.inMelbourne);
  const otherClubs = clubs.filter(club => !club.inMelbourne);

  return (
    <div>
      <PageMeta
        title="Our Dojang"
        description={metaDescription}
        path={pathname}
      />
      <div>
        <h1>Our Dojang</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <section>
        <h2>Instructors</h2>
        <p dangerouslySetInnerHTML={{ __html: instructorsIntro }}></p>
        {instructors.map(item => <Instructor key={item.name} {...item} />)}
      </section>
      <section>
        <h2>Associated clubs</h2>
        <p dangerouslySetInnerHTML={{ __html: clubsIntro }}></p>
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
      </section>
      <ul>
        <li><RelatedLink to="/">Train with us</RelatedLink></li>
        <li><RelatedLink to="/">Choose your membership</RelatedLink></li>
        <li><RelatedLink to="/tkd">What is Taekwon-Do?</RelatedLink></li>
      </ul>
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
  }
`
