import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const DeleteForm = () => {

    const [selectedUser, setSelectedUser] = useState()
    // const history = useHistory()

    const deleteUser = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .delete(`/friends/${selectedUser}`)
        .then((response) => {
            console.log(response)
            // history.push('/protected')
            window.location.reload(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    const handleChange = (event) => {
        event.preventDefault();
        setSelectedUser(event.target.value)
        console.log(selectedUser)
    }

    return(
        <div className='delete-form-container'>
            <h2 className='delete-form-container__header'>User Delete:</h2>
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
