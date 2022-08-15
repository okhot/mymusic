import React from 'react'
import Feature from './HomeBox1/Feature'
import './Home.css'
import MusicBox from '../musicBox/MusicBox'

function Home() {
  return (
    <div className='home'>
        <Feature/>
        <div className='top-artist'>
          <h3>TOP ARTISTS</h3>
          <div className='top-artist__boxs'>
            <MusicBox />
            <MusicBox />
            <MusicBox />
            <MusicBox />
            <MusicBox />
            <MusicBox />
          </div>
          
        </div>
    </div>
  )
}

export default Home