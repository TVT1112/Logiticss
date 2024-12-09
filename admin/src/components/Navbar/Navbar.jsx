import React from 'react'
import './Navbar.css'
import { asset } from '../../assets/index.js'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>TVT-admin</h1>
      <img className='profile' src={asset.profile}/>
    </div>
  )
}

export default Navbar