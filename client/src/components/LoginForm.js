// import React, { useState } from 'react';
import React, { Component } from 'react';


import { axiosWithAuth } from '../utils/axiosAuth';


class LoginForm extends Component {
    

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    
    direct

    handleChange = (event) => {
        this.setState({
            credentials: {
            ...this.state.credentials, 
            [event.target.name]: event.target.value 
            }
        });
        console.log('looky here, hoss:', this.state.credentials)
    }

    login = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then((response) => {
                console.log("post response, tex:", response)
                localStorage.setItem("token", response.data.payload)
                this.props.router.push("/protected")
            })
            .catch((error) => {
                console.log('error on the presses, Tex:', error)
            })
    }



    render() {
        return (
            <div className='login-form-container'>
                <label htmlFor="username">Username:</label>
                    <input 
                        className='login-form-container__input'
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                <label htmlFor="username">Password:</label>
                    <input 
                        className='login-form-container__input'
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                
                <button 
                    className='login-form-container__button'
                    onClick={this.login}
                >Login</button>
            </div> 
        )
    }
}




export default LoginForm;


// * written as a functional component: 
// const LoginForm = () => {

//     // define local state 
//     const [ input, setInput ] = useState({})

//     // define handlechange logic 

//     const handleChange = (event) => {
//         event.preventDefault();
//         setInput({
//             ...input,
//             [event.target.name]: event.target.value
//         })
//         console.log('look here, hoss:',input)
//     }

//     // implement login logic from external file 

//     return (
//         <div className='login-form-container'>
//         <label htmlFor="username">Username:</label>
//             <input 
//                 className='login-form-container__input'
//                 type='text'
//                 name='username'
//                 // value={}
//                 onChange={handleChange}
//             />
//         <label htmlFor="username">Password:</label>
//             <input 
//                 className='login-form-container__input'
//                 type='text'
//                 name='password'
//                 // value={}
//                 onChange={handleChange}
//             />
//         <button 
//             className='login-form-container__button'
//             // onClick={}
//         >Login</button>
//         </div>
//     )
// };