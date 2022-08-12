import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
    <div className='side-bar'>
        <div className='logo'>
          <img></img>
        </div>
        <ul className='side-bar__list'>
            <h3>MENU</h3>
            <li className='side-bar__item active'><i class="fa-solid fa-house"></i>Discover</li>
            <li className='side-bar__item'><i class="fa-solid fa-eye"></i>Explore</li>
            <li className='side-bar__item'><i class="fa-solid fa-search"></i>Search</li>
        </ul>
        <ul className='side-bar__list'>
          <h3>LIBRARY</h3>
            <li className='side-bar__item'><i class="fa-solid fa-music"></i>My Music</li>
            <li className='side-bar__item'><i class="fa-solid fa-book-bookmark"></i>Albums</li>
            <li className='side-bar__item'><i class="fa-solid fa-user"></i>Artist</li>
        </ul>
        <ul className='side-bar__list'>
          <h3>PLAYLIST</h3>
            <li className='side-bar__item'><i class="fa-solid fa-headset"></i>Cover</li>
            <li className='side-bar__item'><i class="fa-solid fa-heart"></i>Favorites</li>
            <li className='side-bar__item'><i class="fa-solid fa-share-nodes"></i>Share</li>
            <li className='side-bar__item'><i class="fa-solid fa-download"></i>Downloade</li>
        </ul>
        <ul className='side-bar__list'>
          <h3>OTHERS</h3>
            <li className='side-bar__item'><i class="fa-solid fa-gear"></i>Setting</li>
            <li className='side-bar__item'><i class="fa-solid fa-book-bookmark"></i>Logout</li>
        </ul>
        
             
        
    </div>
  )
}

export default SideBar