import React from 'react'
import { useSelector } from 'react-redux'

const HookedComponent = () => {
    const greeting = useSelector(state => state.greeting)
    return (
        <div>
            Yo from HookedComponent and {greeting}
        </div>
    )
}

export default HookedComponent
