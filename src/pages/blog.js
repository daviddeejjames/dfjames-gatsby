import React from 'react'
import Link from 'gatsby-link'

const Blog = ({ data }) => (
  <div className="blog page-wrap">
    <h1 className="page-title">Blog</h1>
    <div className="blog-post-list">
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.id} className="post">
          <Link to={`blog/${node.slug}`}>
            <h3 className="post-title">{node.title}</h3>
            <div className="date">{node.date}</div>
          </Link>
          <div className="divider"></div>
          <div className="excerpt" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </div>
  </div>
)

export default Blog

export const pageQuery = graphql`
  query getPostQuery {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date
        }
      }
    }
  }
`
