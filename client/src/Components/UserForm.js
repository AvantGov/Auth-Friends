import React, { useState } from 'react';


const UserForm = () => {

    const [userInput, setUserInput] = useState({})

    const handleChange = (event) => {
        event.preventDefault();
        setUserInput({
            [event.target.name]: event.target.value
        })
    }

    

    return(
        <div className='user-form-container'>
            <h2> User Edit: </h2>
            <label htmlFor='name'>Name</label>
            <input 
                className='login-form-container__input'
                type='text'
                name='name'
                // value={}
                onChange={handleChange}
            />
            <label htmlFor='age'>Age</label>
            <input 
                className='login-form-container__input'
                type='number'
                name='age'
                // value={}
                onChange={handleChange}
            />
            <label htmlFor='email'>Email</label>
            <input 
                className='login-form-container__input'
                type='text'
                name='email'
                // value={}
                onChange={handleChange}
            />
            <button 
                // onClick={}
                className='login-form-container__button'>Modify
            </button>
            <button 
                // onClick={}
                className='login-form-container__button'>Delete
            </button>
            
        </div>
    )
}

export default UserForm;