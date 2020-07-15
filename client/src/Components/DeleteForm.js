import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const DeleteForm = () => {

    const [selectedUser, setSelectedUser] = useState({})

    const deleteUser = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .delete(`/friends/:id`)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    const handleChange = (event) => {
        event.preventDefault();
        setSelectedUser({
            ...selectedUser,
            [event.target.name]: event.target.value
        })
        console.log(selectedUser)
    }

    return(
        <div className='delete-form-container'>
            <label htmlFor='selected-friend'>Friend ID</label>
            <input 
                className='delete-form-container__input'
                type='number'
                name='selected-friend'
                // value={}
                onChange={handleChange}
            />
            <button 
                onClick={deleteUser}
                className='login-form-container__button'>Delete
            </button> 
        </div>
    )
}

export default DeleteForm;
