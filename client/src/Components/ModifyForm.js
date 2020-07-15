import React, { useState } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const ModifyForm = () => {

    const [userInput, setUserInput] = useState({});

    const handleChange = (event) => {
        event.preventDefault()
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        })
    }

    const submitMod = (event) => {
        event.preventDefault()
        axiosWithAuth()
        .put(`friends/${userInput.id}`, userInput)
        .then((response) => {
            console.log('look at the mod response', response)
            window.location.reload(false)
        })
        .catch((error) => {
            console.log(error)
        })

    }

    return(
        <div className='modify-form-container'>
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
            <label htmlFor='user-id'>User ID</label>
            <input 
                className='user-form-container__input'
                type='text'
                name='id'
                // value={}
                onChange={handleChange}
            />
            <button 
                onClick={submitMod}
                className='user-form-container__button'>Mod It!
            </button> 
        </div>
    )
}

export default ModifyForm;