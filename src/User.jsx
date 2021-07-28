import React, { useState, useEffect } from 'react'

const User = (props) => {
    const [realName, setRealName] = useState(true)

    useEffect(() => {
        if (props.user.last_name === 'Wong') {
            setRealName(false)
        }
    }, [])

    return (
        <>
            <li>{props.user.first_name} {props.user.last_name}
                {realName ? 'this is a real last name' : 'This is NOT a real last name'}
                <button data-cy='click-me' onClick={() => props.changeMessage(`You clicked on ${props.user.first_name}`)}>Click me</button>
            </li>
        </>
    )
}

export default User
