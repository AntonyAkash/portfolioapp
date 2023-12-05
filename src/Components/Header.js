import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import myImg from '../Img/myImg.jpeg'

const Header = () => {
  const {titl}=useContext(DataContext)
  return (
    <div className='Header'>
      
      <p><img className='Img' alt='Antony' src={myImg} width="100" height="100"  /><h5>{titl}</h5>
      </p>
      
      
       </div>
  )
}

export default Header