import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'

const NewPost = () => {
  const {title,setTitle,setBody,handlesubmit}=useContext(DataContext)
  return (
    <main className='NewPost'>
     <h2>Please post your Thoughts</h2>
     <form className='newPostForm' onSubmit={handlesubmit}>
       <label forhtml='inpt'>Title:</label>
       <input id='inpt' required value={title} onChange={(e)=>setTitle(e.target.value)}/>
       <label forhtml='textinpt'>body:</label>
       <textarea id='textinpt' className='PostBody' required  placeholder="Please type your comments about the app along with company name and phone number..."onChange={(e)=>setBody(e.target.value)}></textarea>
       <button type='submit'>SUBMIT</button>
     </form>
    </main>
  )
}

export default NewPost