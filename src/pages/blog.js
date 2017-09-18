import React from 'react'
import Link from 'gatsby-link'

const Blog = ({ data }) => (
  <div>
    <h1>Blog</h1>
    <div className="blog-post-list">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="post">
          <h3 className="post-title">{node.frontmatter.title}</h3>
          <div className="date">{node.frontmatter.date}</div>
          <div className="excerpt">{node.excerpt}</div>
        </div>
      ))}
    </div>
    {console.log(data)}
  </div>
)

export const query = graphql`
  query MyBlogPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
