import React from 'react'
import { graphql } from 'gatsby'

import TemplateWrapper from '../components/index.js'

import Socials from '../components/socials'
//
// Home page of portfolio site
//
const IndexPage = ({ data }) => {
  const homepage = data.wordpressPage
  const profileImage = data.wordpressPage.acf.profile_image.source_url

  return (
    <TemplateWrapper>
      <div className="front-page">
        <div className="card-wrap">
          <div className="image-wrap">
            <div className="mask">
              <div
                className="profile-image"
                style={{ backgroundImage: `url(${profileImage})` }}
              >
                {' '}
              </div>
            </div>
          </div>
          <div className="content">
            <div
              className="inner"
              dangerouslySetInnerHTML={{ __html: homepage.content }}
            />
            <Socials />
          </div>
        </div>
      </div>
    </TemplateWrapper>
  )
}

export default IndexPage

// Pull the homepage content from Wordpress
export const homePageQuery = graphql`
  query homePageQuery {
    wordpressPage(slug: { eq: "home-page" }) {
      id
      title
      content
      acf {
        profile_image {
          source_url
        }
      }
    }
  }
`
