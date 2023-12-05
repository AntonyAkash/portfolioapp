import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import Feeder from './Feeder';

const Home = () => {
  const {searchResults}=useContext(DataContext);
  return (
    <main className='Home'>
      {searchResults.length?(<Feeder/>):(<p style={{marginTop:"2rem"}}>`No post is there to display`</p>)
      }
    </main>
  )
}

export default Home 