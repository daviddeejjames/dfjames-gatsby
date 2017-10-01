import React from 'react'

const PageTemplate = ({ data }) => {

  const page = data.wordpressPage

  return (
    <div className="single-page page-wrap">
      <div className="page-card">
        <h1>{page.title}</h1>
        <div className="divider"></div>
        <div className="page-content" dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
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

