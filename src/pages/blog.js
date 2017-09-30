import React from 'react'
import Link from 'gatsby-link'
import ClockIcon from "react-icons/lib/fa/clock-o"

import moment from 'moment'

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
          <div className="excerpt" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <div className="date-wrap">
            <ClockIcon />
            <div className="date">{moment(new Date(node.date)).format("MMM DD, YYYY")}</div>
          </div>
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
