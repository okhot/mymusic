import React from "react";
import './Music.css'

function Music (){
    return(
        <div className='music'>
            <p className='music__position'>01</p>
            <div className='music__img'>

            </div>
            <div className='music__info'>
                <h3 className='music__title'>Selfish love</h3>
                <p className='music__artist'>Selana Gomez </p>
            </div>
            <p className='music__duration'>3:31</p>
        </div>
    )
}
export default Music