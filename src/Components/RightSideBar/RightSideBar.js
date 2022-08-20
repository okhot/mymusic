import React from "react";
import Music from "../Music/Music";
import './RightSideBar.css'

function RightSideBar (){
    return (
        <div className='right-side-bar'>
            <div className='top-weekly'>
                <div className='header'>
                    <h3>Top 100 weekly</h3>
                    <p>more list</p>
                </div>
                <Music />
                <Music />
                <Music />
                <Music />
            </div>
            
        </div>
    )
}

export default RightSideBar