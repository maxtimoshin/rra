import React from 'react';
import './style.css'
import Header from '../../components/Header';



const SignUp = () => {



    // const { register, handleSubmit, resetField, watch, formState: { errors } } = useForm();

    // const [userStatus, setUserStatus] = useState(false)

    // const resetInputsValues = () => {
    //     resetField("login")
    //     resetField("password")
    // }

    // const onSubmit = async (userData) => {
    //     console.log(userData)
    //     let result = await fetch('http://localhost:8080/is-user-exist', {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(userData)
    //     })
    //     let data = await result.json()
    //     data.id === false ? setUserStatus(true) : setUserStatus(false)
    //     resetInputsValues()
    // }

    return (
        <>
            <Header />
            {/* <form className='form' onSubmit={handleSubmit(onSubmit)}>
                {userStatus ? <span className='user-exist-warning'>User with such name already exist</span> : ''}
                {errors.login && <span className='error'>Login required</span>}
                <input className='input input-login' placeholder="Login" {...register("login", { required: false })} />
                {errors.password && <span className='error'>Password required</span>}
                <input className='input input-password' placeholder="Password" {...register("password", { required: false })} />
                <input className='submit-button' type="submit" />
            </form> */}
            {/* <button onClick={() => loginWithRedirect()}>Log In</button> */}
        </>
    );
};

export default SignUp;