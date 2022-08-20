import React from 'react'
import Feature from './HomeBox1/Feature'
import './Home.css'
import MusicBox from '../musicBox/MusicBox'

function Home() {
  return (
    <div className='home'>
        <div className='home__header'>
          <h3 className='home__title'>My Music</h3>
          <div className='home__functions'>
            <p><i class="fa-solid fa-play"></i>play</p>
            <p><i class="fa-solid fa-shuffle"></i>shuffle</p>
          </div>
        </div>
        <MusicBox />
        <MusicBox />
        <MusicBox />
        <MusicBox />
        <MusicBox />
        <Feature/>
        
    </div>
  )
}

export default Home