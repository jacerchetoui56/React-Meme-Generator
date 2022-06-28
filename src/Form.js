import React, { useState, useEffect } from 'react'
import Meme from './Meme'

export default function Form() {
    const [allMemes, setAllMemes] = useState([])

    const [formData, setFormData] = useState({
        firstSentense: '',
        lastSentense: '',
        url: "http://i.imgflip.com/1bij.jpg"
    })
    function handleFormChange(event) {
        // !the best practice is this one
        const { name, value } = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }
    function getMeme() {
        let random = Math.floor(Math.random() * allMemes.length)
        setFormData(prev => {
            return {
                ...prev,
                url: allMemes[random].url
            }
        })
    }

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    return (
        <div className='main'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='inputs'>
                    <input
                        onChange={handleFormChange}
                        name='firstSentense'
                        type={'text'}
                        placeholder='first sentence'
                        value={formData.firstSentense} />

                    <input
                        onChange={handleFormChange}
                        name='lastSentense'
                        type={'text'}
                        placeholder='second sentence'
                        value={formData.lastSentense}
                    />
                </div>
                <button onClick={getMeme} >
                    Get a new meme image 🖼
                </button>
            </form>
            <Meme infos={formData} />
        </div>
    )
}
