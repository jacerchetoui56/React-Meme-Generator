import React from 'react'
import trollFace from './images/troll-face.png'
export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img src={trollFace} alt="troll face" />
                <span>Meme Generator</span>
            </div>
            <div >Made By Jacer</div>
        </header>
    )
}
