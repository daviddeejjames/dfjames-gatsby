import React from 'react'
import Link from 'gatsby-link'

//
// Home page of portfolio site
//
const IndexPage = ({ data }) => {
  const homepage = data.wordpressPage
  const acfData = JSON.parse(data.wordpressPage.childWordpressAcfField.internal.content)
  const folioItems = acfData.folio_items

  return (
    <div className="front-page">
      <div className="page-content" dangerouslySetInnerHTML={{ __html: homepage.content }} />
      <div className="folio-items-wrap">
        {folioItems.map(item => (
          <div className="folio-item">
            <a href={item.url} target="_blank">
              <div className="item-image" style={{backgroundImage: `url(${item.image.url})`}}> </div>
              <div className="item-title">{item.title}</div>
            </a>
          </div>
        ))}
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