import React from 'react'
import Link from 'gatsby-link'
import ClockIcon from "react-icons/lib/fa/clock-o"
import Footer from '../layouts/footer'

import { format } from 'date-fns'

const PostTemplate = ({ data }) => {
  const post = data.wordpressPost

  return (
    <div className="single-post page-wrap">
      <div className="post-card">
        <h1 className="post-title">{post.title}</h1>
        <div className="divider"></div>
        <div className="date-wrap">
          <ClockIcon />
          <div className="date">{format(new Date(post.date), ("MMM DD, YYYY"))}</div>
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link to="/blog" className="back-to-blog">Back to Blog</Link>
      </div>
      <Footer />
    </div>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
      date
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

