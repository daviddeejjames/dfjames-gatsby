import React from 'react'
import { graphql } from 'gatsby'

import TemplateWrapper from '../components/index.js'
import Footer from '../components/footer'

const PageTemplate = ({ data }) => {
  const page = data.wordpressPage

  return (
    <TemplateWrapper>
      <div className="single-page page-wrap">
        <div className="page-card">
          <h1>{page.title}</h1>
          <div className="divider" />
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
        <Footer />
      </div>
    </TemplateWrapper>
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