import React from 'react'
import Helmet from 'react-helmet'

const PostTemplate = ({ data }) => {

  const post = data.wordpressPost

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
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

