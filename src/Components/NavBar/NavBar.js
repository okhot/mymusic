import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'


const NavBar = () => {
  return (
     <section>
           <div className="navbar">
            <div className="navbar__links">
      <Link to='/' className="navbar__link">Music</Link>
      <Link to='/' className="navbar__link">Podcast</Link>
      <Link to='/' className="navbar__link">Radio</Link>
      <Link to='/' className="navbar__link">Live</Link>
            </div>
            <input type="text" placeholder="Search..." className="navbar__search" />
            <span class="material-symbols-outlined">
                favorite
            </span>

            <span className="material-symbols-outlined">
                notifications
            </span>
     
            <span className="material-symbols-outlined">
                account_circle
            </span>
            <h4>Ryan Ahzari</h4>
      
    </div>
  
     </section>
  )
}

export default NavBar
