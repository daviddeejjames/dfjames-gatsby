import React from 'react'
import Link from 'gatsby-link'

const Blog = ({ data }) => (
  <div>
    <h1>Blog</h1>
    <div className="blog-post-list">
      {data.allWordpressPost.edges.map(({ node }) => (
        <div className="post">
          <h3 className="post-title">{node.title}</h3>
          <div className="date">{node.date}</div>
          <div className="excerpt">{node.excerpt}</div>
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
          title
          excerpt
          slug
          date
        }
      }
    }
  }
`
