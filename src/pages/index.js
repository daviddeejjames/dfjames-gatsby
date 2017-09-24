import React from 'react'
import Link from 'gatsby-link'

//
// Home page of portfolio site
//
const IndexPage = ({ data }) => {
  const homepage = data.wordpressPage

  return (
    <div className="front-page">
      <div className="page-content" dangerouslySetInnerHTML={{ __html: homepage.content }} />
    </div>
  )
}

export default IndexPage

// Pull the homepage content from Wordpress
export const homePageQuery = graphql`
query homePageQuery {
  wordpressPage(slug: {eq: "home-page"}) {
    content
  }
}
`