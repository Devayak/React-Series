import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Nav = () => {
  return (
    <div>
      <nav>
           <ul>
               <li ><Link to='/home'>Home</Link></li>
               <li><Link to='/about'>About</Link></li>
               <li><Link to='/contact'>Contact</Link></li>
               <li><Link to='/help'>Help</Link></li>
           </ul>
       </nav></div>
  )
}

export default Nav