import React from 'react'
import Input from '../Input'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../redux/Slices/usersSlice'

const InputsList = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState('')
    const users = useSelector(state => state.users)

    const nameChanger = name => {
        setUserData(prev => ({
            ...prev,
            name: name,
        }))
    }
    const ageChanger = age => {
        setUserData(prev => ({
            ...prev,
            age: age,
        }))
    }

    const countryChanger = country => {
        setUserData(prev => ({
            ...prev,
            country: country,
        }))
    }
    return (
        <>
            <Input changerHandler={e => { nameChanger(e.target.value) }} userValue={userData.name} placeholder='Name' />
            <Input changerHandler={e => { ageChanger(e.target.value) }} userValue={userData.age} placeholder='Age' />
            <Input changerHandler={e => { countryChanger(e.target.value) }} userValue={userData.country} placeholder='Country' />
            <ul className='list'>
                {users.map((user, id) => <li key={id} className='list-item'>{user.title} {user.age} {user.country}</li>)}
            </ul>
            <button
                onClick={() => {
                    dispatch(addUser(userData))
                    setUserData({})
                }}
            >
                Add User
            </button><br />
        </>
    )
}

export default InputsList