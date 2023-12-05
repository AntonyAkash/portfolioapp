import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../Context/DataContext'
const Nav = () => {
  const {search,setSearch}=useContext(DataContext);
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor='searchinp'>search</label>
      <input id='searchinp' type='textbox' placeholder='Search Post' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Post'>Post</Link></li>
        <li><Link to='/profile'>Profile</Link> </li>
        <li><Link to='/About'>About</Link></li>
        
      </ul>
    </nav>
  )
}

export default Nav