import React, { useState } from 'react';
import Header from '../../components/Header';
import { useForm } from "react-hook-form";
import './style.css'

const SignIn = () => {

    const [token, setToken] = useState()
    const [isLogged, setIsLogged] = useState(false)

    async function loginUser(credentials) {
        return fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    console.log(token)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const token = await loginUser({
            "id": Math.floor(Math.random() * 10000000),
            "login": data.login,
            "password": data.password,
        })
        setToken(token)
        setIsLogged(true)
    }

    return (
        <>
            <Header />
            {!isLogged ? <form className='form' onSubmit={handleSubmit(onSubmit)}>
                {errors.login && <span className='error'>Login required</span>}
                <input className='input input-login' placeholder="Login" {...register("login", { required: true })} />
                {errors.password && <span className='error'>Password required</span>}
                <input className='input input-password' placeholder="Password" {...register("password", { required: true })} />
                <input className='submit-button' type="submit" />
            </form> : 'logged'}
        </>
    );
};

export default SignIn;