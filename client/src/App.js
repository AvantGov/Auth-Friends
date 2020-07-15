import React from 'react';
import { Route, Switch } from 'react-router-dom';




// components 
import DeleteForm from '../src/Components/DeleteForm';
import PrivateRoute from './Components/PrivateRoute';
import ProtectedList from './Components/ProtectedList';
import LoginForm from './Components/LoginForm'
import UserForm from './Components/UserForm';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <PrivateRoute exact path='/protected' component={ProtectedList} />
      </Switch>
      <Route exact path='/protected' component={UserForm} />
      <Route exact path='/protected' component={DeleteForm} />
    </div>
  );
}

export default App;
