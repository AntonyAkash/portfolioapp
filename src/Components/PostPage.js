import React from 'react'
import { Link } from 'react-router-dom'

const PostPage = ({post}) => {
  return (
    <article className='post'>
      <h2 ><Link to={`Post/${post.id}`}>{post.title}</Link></h2>
      <p className='postBody'>{post.body}</p> 
    </article>
  )
}

export default PostPage