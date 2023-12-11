import { createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/posts"

const DataContext=createContext()

export const DataProvider=({children})=>{
    const [search,setSearch]=useState('');
    const titl="I AM ANTONY IMMANUEAL AKASH ";
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [searchResults,setSearchResults]=useState('');
    const [EditPost,setEditpost]=useState('');
    const [edittitle,setEditTitle]=useState('');
    const [editbody,setEditBody]=useState('');
    
    
    const navigate=useNavigate();

    const [posts,setposts]=useState([])
    
   const handlesubmit=async(e)=>{
      e.preventDefault();
      
      const newPost={title:title,body:body}
      try {
        const response=await api.post("/posts/save",newPost)
        setposts(response);
      } catch (error) {
        console.log(error);
      }
      const allpost=[...posts,newPost];
      setposts(allpost);
      navigate('/');
      setTitle('');
      setBody('');
   }

   const handledelete=(id)=>{
         const newpost=posts.filter((post)=>(post.id).toString() !==id)
         try {
            api.delete(`/posts/delete/${id}`)
         } catch (error) {
            
         }
         setposts(newpost);
         navigate('/');
        }

    const handleEdit=(id)=>{
        const Editpost=posts.filter((post)=>(post.id).toString()===id)
        setEditpost(Editpost);
    }

    const Edit=async(id)=>{
      const arr=posts.filter((post)=>(post.id).toString() !== id)
      const newPost={id:id,title:edittitle,body:editbody}
      try {
      const response=await api.patch(`/posts/Edit/${id}`,newPost);
      alert(response.data);
      const allpost=[...arr,response.data];
      setposts(allpost);
      navigate('/');
      setTitle('');
      setBody('');
      } catch (error) {
        console.log(error);
      }
      
    }
    
useEffect(()=>{
    const fetch = async()=>{
        try{
            const response= await api.get("/posts/fetchall");
            setposts(response.data);
        }catch(err){
            console.log(err);
        }
    }
    fetch();
},[])

useEffect(() => {
 const resultarr= posts.filter((post)=>(post.title).includes(search)||(post.body).includes(search))
 setSearchResults(resultarr.reverse());
},[search,posts])

    return(
        <DataContext.Provider value={{navigate,titl,search,setSearch,posts,setposts,handlesubmit,title,setTitle,body,setBody,handledelete,searchResults,handleEdit,EditPost,Edit,setEditTitle
        ,setEditBody,edittitle,editbody}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;