import React from 'react'
import './MusicBox.css'

function MusicBox() {
  return (
    <div className='music-box'>
        <div className='music-box__content'>
          <div className='music-box__img-box'>
            
          </div>
          <div className='music__info'>
            <h3 className='music-box__artist-name'>Omah__lay</h3>
            <p className='music-box__views'>32M plays</p>
          </div>
        </div>
        <div className='music-box__icons'>
          <p className='music-duration'>3:13</p>
          <i class="fa-solid fa-heart"></i>
        </div>
    </div>
  )
}

export default MusicBox