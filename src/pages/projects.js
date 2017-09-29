import React from 'react'
import Link from 'gatsby-link'

const Projects = ({ data }) => {
  const projectsPage = data.wordpressPage
  const acfData = JSON.parse(data.wordpressPage.childWordpressAcfField.internal.content)
  const folioItems = acfData.folio_items

  return (
    <div className="projects-page">
      <h1 className="page-title">{projectsPage.title}</h1>
      <div className="page-content" dangerouslySetInnerHTML={{ __html: projectsPage.content }} />
      <div className="folio-items-wrap">
        {folioItems.map(item => (
          <div className="folio-item">
            <a href={item.url} target="_blank">
              <div className="item-image" style={{ backgroundImage: `url(${item.image.url})` }}> </div>
              <div className="item-title">{item.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

// Pull the project page content from Wordpress
export const projectsPageQuery = graphql`
query projectsPageQuery {
  wordpressPage(slug: {eq: "projects"}) {
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