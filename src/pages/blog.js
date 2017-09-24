import React from 'react'
import Link from 'gatsby-link'

const Blog = ({ data }) => (
  <div>
    <h1>Blog</h1>
    <div className="blog-post-list">
      {data.allWordpressPost.edges.map(({ node }) => (
        <div className="post">
          <Link key={node.id} to={`blog/${node.slug}`}>
            <h3 className="post-title">{node.title}</h3>
            <div className="date">{node.date}</div>
          </Link>
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
