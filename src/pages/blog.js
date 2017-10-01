import React from 'react'
import Link from 'gatsby-link'
import ClockIcon from "react-icons/lib/fa/clock-o"
import Footer from '../layouts/footer'

import { format } from 'date-fns'

const Blog = ({ data }) => (
  <div className="blog page-wrap">
    <h1 className="page-title">Blog</h1>
    <div className="blog-post-list">
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.id} className="post">
          <Link to={`blog/${node.slug}`}>
            <h3 className="post-title">{node.title}</h3>
          </Link>
          <div className="divider"></div>
          <div className="date-wrap">
            <Link to={`blog/${node.slug}`}>
              <ClockIcon />
              <div className="date">{format(new Date(node.date), ("MMM DD, YYYY"))}</div>
            </Link>
          </div>
          <div className="excerpt" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </div>
    <Footer />
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
