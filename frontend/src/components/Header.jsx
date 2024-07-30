import React from 'react'
import MiniHeader from './MiniHeader'
import Navbar from './Navbar'
import MiniSearch from './MiniSearch'
const Header = () => {
  return (
    <div class="navbar-container">
        <div class="container">
           <MiniHeader />
           <Navbar />
           <MiniSearch />
       </div>
    </div>
  )
}

export default Header
