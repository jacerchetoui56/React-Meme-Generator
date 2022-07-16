import React from 'react'

export default function Meme({ url, firstSentense, lastSentense }) {
    return (
        <>
            <div className='meme'>
                <img src={url} alt='meme' />
                <div className='top-text'>{firstSentense}</div>
                <div className='bottom-text'>{lastSentense}</div>
            </div>
        </>
    )
}
