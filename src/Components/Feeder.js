import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import PostPage from './PostPage'

const Feeder = () => {
  const {searchResults}=useContext(DataContext);
  return (
    <>
    {
      searchResults.map((post) =>  <PostPage key={post.id} post={post}/> )
    }
    </>
  )
}

export default Feeder