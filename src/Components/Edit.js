import React, { useContext, useEffect } from 'react'
import DataContext from '../Context/DataContext';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const {Edit,setEditTitle,setEditBody,edittitle,editbody,posts}=useContext(DataContext);
    const {id}=useParams();
    const EditPost=posts.find((post)=>(post.id).toString() ===id);
    
    useEffect(()=>{
      setEditTitle(EditPost.title);
      setEditBody(EditPost.body);
    },[EditPost,setEditBody,setEditTitle])

  return (
    <main className='newPostForm'>
     <h2>Edit post</h2>
     <form className='NewPostform' onSubmit={(e)=>e.preventDefault()}>
       <label forhtml='inpt'>Title:</label>
       <input id='inpt' required value={edittitle} onChange={(e)=>setEditTitle(e.target.value)}/>
       <label forhtml='textinpt'>body:</label>
       <textarea id='textinpt' className='PostBody' required  value={editbody} onChange={(e)=>setEditBody(e.target.value)}/>
       <button type='submit' onClick={()=>Edit(EditPost.id)}>SUBMIT</button>
     </form>
    </main>
  )
}

export default Edit