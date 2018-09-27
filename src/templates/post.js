import React from 'react'
import { Link, graphql } from 'gatsby'
import { FaClock } from 'react-icons/fa'
import { format } from 'date-fns'

import TemplateWrapper from '../components/index.js'
import Footer from '../components/footer'

const PostTemplate = ({ data }) => {
  const post = data.wordpressPost

  return (
    <TemplateWrapper>
      <div className="single-post page-wrap">
        <div className="post-card">
          <h1 className="post-title">{post.title}</h1>
          <div className="divider" />
          <div className="date-wrap">
            <FaClock />
            <div className="date">
              {format(new Date(post.date), 'MMM DD, YYYY')}
            </div>
          </div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Link to="/blog" className="back-to-blog">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    </TemplateWrapper>
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
