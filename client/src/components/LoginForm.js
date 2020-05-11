import React from 'react';



const LoginForm = () => {

    // define login logic 

    // define handle change logic 


    return (
        <div className='login-form-container'>
        <label htmlFor="username">Username:</label>
            <input 
                className='login-form-container__input'
                type='text'
                name='username'
                // value={}
                // onChange={}
            />
        <label htmlFor="username">Password:</label>
            <input 
                className='login-form-container__input'
                type='text'
                name='password'
                // value={}
                // onChange={}
            />
        <button 
            className='login-form-container__button'
            // onClick={}
        >Login</button>
        </div>
    )
};

export default LoginForm;