import React from 'react';
import { Route } from 'react-router-dom';


// components 
import DeleteForm from '../src/Components/DeleteForm';
import PrivateRoute from './Components/PrivateRoute';
import ProtectedList from './Components/ProtectedList';
import LoginForm from './Components/LoginForm'


function App() {
  return (
    <div className="App">
      <h1> i am the app page </h1>
      <LoginForm />
    </div>
  );
}

export default App;
