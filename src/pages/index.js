import React from 'react'
import Link from 'gatsby-link'

//
// Home page of portfolio site
//
const IndexPage = ({ data }) => {
  const homepage = data.wordpressPage
  const acfData = JSON.parse(data.wordpressPage.childWordpressAcfField.internal.content)
  const profileImage = acfData.profile_image

  return (
    <div className="front-page">
      <div className="card-wrap">
        <div className="image-wrap">
          <div className="mask">
            <div className="profile-image" style={{ backgroundImage: `url(${profileImage.url})` }}> </div>
          </div>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: homepage.content }} />
      </div>
    </div>
  )
}

export default IndexPage

// Pull the homepage content from Wordpress
export const homePageQuery = graphql`
query homePageQuery {
  wordpressPage(slug: {eq: "home-page"}) {
    id
    title
    content
    childWordpressAcfField {
      internal {
        content
      }
    }
  }
}
`