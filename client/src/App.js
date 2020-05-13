// * dependencies:
import React from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

// * components: 
import LoginForm from './components/LoginForm';
import ProtectedList from './components/ProtectedList';

// ! need to finish implemetning all logic together with example code 
// ! need to add stlying 
// ! need to add data strucutre to protected list 

// ! do the post with auth function and then chain promiises 
// ! off of the call to handle the data 







function App() {
  return (
    <div className="App">
      
      <div className='App__link-container'>
        <Link to='/login' className='link-container__link'>Click To Login</Link>
      </div>

      <Route path='/login' component={() => 
        <LoginForm />
      } />
      
      <PrivateRoute exact path='/protected' component={ProtectedList} />
    </div>
  );
}

export default App;
