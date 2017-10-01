import React from 'react'
import Footer from '../layouts/footer'

const PageTemplate = ({ data }) => {

  const page = data.wordpressPage

  return (
    <div className="single-page page-wrap">
      <div className="page-card">
        <h1>{page.title}</h1>
        <div className="divider"></div>
        <div className="page-content" dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
      <Footer />
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

