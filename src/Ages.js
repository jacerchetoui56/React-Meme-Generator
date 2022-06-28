import React, { useState } from 'react'
import Person from './Person'

export default function Ages() {
    const data = [
        {
            name: 'jacer',
            age: 20
        },
        {
            name: 'khaled',
            age: 34
        },
        {
            name: 'ahmed',
            age: 14
        },
    ]

    const [ages, setAges] = useState(data)
    const [selected, setSelected] = useState(null)
    function changeAge(name) {
        setAges(prev => prev.map(person => person.name === name ? { ...person, age: person.age + 1 } : person))
    }
    function select(name) {
        setSelected(name)
    }
    return (
        <>
            {
                ages.map(person => {
                    return <Person
                        key={person.name}
                        infos={person}
                        handleClick={() => changeAge(person.name)}
                        handleClickSelect={() => select(person.name)}
                    />
                })
            }
            <div >the selected person is <b>{selected}</b> </div>
        </>
    )
}
