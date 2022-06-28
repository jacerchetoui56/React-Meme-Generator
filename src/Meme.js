import React from 'react'

export default function Meme(props) {
    return (
        <>
            <div className='meme'>
                <img src={props.infos.url} alt='meme' />
                <div className='top-text'>{props.infos.firstSentense}</div>
                <div className='bottom-text'>{props.infos.lastSentense}</div>
            </div>
        </>
    )
}
