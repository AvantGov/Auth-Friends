import React, { useState } from 'react';



const LoginForm = () => {

    // define local state 
    const [ input, setInput ] = useState({})

    // define handlechange logic 

    const handleChange = (event) => {
        event.preventDefault();
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        console.log('look here, hoss:',input)
    }

    // implement login logic from external file 

    return (
        <div className='login-form-container'>
        <label htmlFor="username">Username:</label>
            <input 
                className='login-form-container__input'
                type='text'
                name='username'
                // value={}
                onChange={handleChange}
            />
        <label htmlFor="username">Password:</label>
            <input 
                className='login-form-container__input'
                type='text'
                name='password'
                // value={}
                onChange={handleChange}
            />
        <button 
            className='login-form-container__button'
            // onClick={}
        >Login</button>
        </div>
    )
};

export default LoginForm;