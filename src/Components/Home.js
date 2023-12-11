import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import Feeder from './Feeder';


const Home = () => {
  const {searchResults,navigate}=useContext(DataContext);
  return (
    <main className='Home'>
      {searchResults.length?(<Feeder/>):(navigate('/profile'))
      }
    </main>
  )
}

export default Home 