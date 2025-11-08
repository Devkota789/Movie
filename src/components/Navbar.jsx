import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "../css/Navbar.css"



const Navbar = () => {
  return (
    
    < nav className="navbar">
        <div className='navber-brand'>

            <Link to="/"> MoviesApp</Link>


        </div>
        <div className='navber-links'>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites">Favorites</Link>

        </div>



    </nav>
  )
}

export default Navbar