import React from 'react'

const Input = ({changerHandler, userValue, placeholder}) => {
    return (
    <input type="text" onChange={changerHandler} value={userValue|| ''} placeholder={placeholder} />
    )
}

export default Input