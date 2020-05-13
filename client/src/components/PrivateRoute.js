import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProtectedList from './ProtectedList';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={(props) => {
            if (localStorage.getItem("token")) {
                return <ProtectedList {...props} />
            } else {
                return <Redirect to='/login' />
            }
        }} 
    />
);

export default PrivateRoute;


