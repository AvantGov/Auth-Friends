import React, { useState } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const UserForm = () => {

    const [userInput, setUserInput] = useState({})

    const handleChange = (event) => {
        event.preventDefault();
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        })
    }

    const submitUser = () => {
        axiosWithAuth()
        .post(`/friends/`, userInput)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <div className='user-form-container'>
            <h2> User Edit: </h2>
            <label htmlFor='name'>Name</label>
            <input 
                className='user-form-container__input'
                type='text'
                name='name'
                // value={}
                onChange={handleChange}
            />
            <label htmlFor='age'>Age</label>
            <input 
                className='user-form-container__input'
                type='number'
                name='age'
                // value={}
                onChange={handleChange}
            />
            <label htmlFor='email'>Email</label>
            <input 
                className='user-form-container__input'
                type='text'
                name='email'
                // value={}
                onChange={handleChange}
            />
            <button 
                onClick={submitUser}
                className='user-form-container__button'>Create
            </button>
        </div>
    )
}

export default UserForm;