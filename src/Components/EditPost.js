import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from '../Context/DataContext';

const EditPost = () => {
    const {id}=useParams();
    const {posts,handledelete,handleEdit}=useContext(DataContext);
    const post=posts.find(post => post.id.toString()===id)
    
  return (
    <main className='PostPage'>
        <article className='post'>
         {post&&
         <> <h2>{post.title}</h2>
         <p>{post.datetime}</p>
         <p>{post.body}</p>
         <button style={{color:'white',backgroundColor:'red'}} onClick={()=>handledelete(post.id)}>Delete</button>
         <button style={{color:'white',backgroundColor:'green'}} onClick={()=>handleEdit(post.id)}><Link to={`/Post/Edit/${post.id}`}>EditPost</Link></button>
         </>
        }
        {!post&&
        <>
        <h1>post not found disoppointing</h1>
        </>
        }
        </article>  
    </main>
  )
}

export default EditPost