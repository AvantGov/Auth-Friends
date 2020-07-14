import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const LoginForm = () => {

    //decalring state of component
    const [userInput, setUserInput] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    //declaring history object
    const history = useHistory();

    //handling input changes 
    const handleChange = (event) => { 
        event.preventDefault()
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        })
        console.log('look here for locale state change:', userInput)
    }


    //handling submission logic for login:
    const login = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', userInput)
            .then((response) => {
                console.log('look here for the login response', response);
                localStorage.setItem('token', response.data.payload)
                setUserInput({
                    username: "",
                    password: ""
                })
                history.push("/protected")
            })
            .catch((error) => {
                console.log('look here for the error messages on the login:', error)
                setErrorMessage(error)
            })
    }


    return(
        <div className='login-form-container'>
            <h2> User Login: </h2>
            <label htmlFor='username'>Username</label>
            <input 
                className='login-form-container__input'
                type='text'
                name='username'
                // value={}
                onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
            <input 
                className='login-form-container__input'
                type='text'
                name='password'
                // value={}
                onChange={handleChange}
            />
            <button 
                onClick={login}
                className='login-form-container__button'
            >Login</button>

            <h1>{`${errorMessage}`}</h1>
        </div>
    )
}

export default LoginForm;