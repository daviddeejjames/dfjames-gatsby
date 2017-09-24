import React from 'react'
import Helmet from 'react-helmet'

const PageTemplate = ({ data }) => {

  const page = data.wordpressPage

  return (
    <div className="single-page">
      <h1>{page.title}</h1>
      <div className="page-content" dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

