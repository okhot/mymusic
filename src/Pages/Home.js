import React from 'react'
import { Router } from 'react-router-dom'
import SideBar from '../Components/sidebar/SideBar'
import NavBar from '../Components/NavBar/NavBar'
import SpotifyGetPlaylist from '../Components/SpotifyApi/SpotifyGetPlaylist'

const Home = () => {
  return (
   <>
   <NavBar />
   <SideBar />
   <SpotifyGetPlaylist />
   </>
  )
}

export default Home
