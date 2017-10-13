import React from 'react'
import Link from 'gatsby-link'
import Footer from '../layouts/footer'

const Projects = ({ data }) => {
  const projectsPage = data.wordpressPage
  const folioItems = projectsPage.acf.folio_items

  return (
    <div className="projects-page page-wrap">
      <h1 className="page-title">{projectsPage.title}</h1>
      <div className="page-content" dangerouslySetInnerHTML={{ __html: projectsPage.content }} />
      <div className="folio-items-wrap">
        {folioItems.map(item => (
          <div key={item.title} className="folio-item">
            <a href={item.url} target="_blank">

              <div className="item-title-wrap">
                <div className="item-title">{item.title}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <Footer />
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
    acf{
      folio_items{
        title
        url
      }
    }
  }
}
`