import React from 'react'
import Helmet from 'react-helmet'
import ClockIcon from "react-icons/lib/fa/clock-o"

const PostTemplate = ({ data }) => {
  const post = data.wordpressPost

  return (
    <div className="single-post page-wrap">
      <div className="post-card">
        <h1 className="post-title">{post.title}</h1>
        <div className="divider"></div>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="date-wrap">
          <ClockIcon />
          <div className="date">{post.date}</div>
        </div>
      </div>
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

