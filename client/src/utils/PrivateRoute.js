import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import ProtectedList from '../components/ProtectedList';

// const PrivateRoute = ({ component: Component, ...rest}) => (
//     <Route 
//         {...rest}
//         render={(props) => {
//             localStorage.getItem('token') ? (
//                 <ProtectedList {...props} />
//             ) : (
//                 <Redirect to='/login' />
//             )
//         }} 
//     />
// );

// export default PrivateRoute;


// ! getting an error need to figure out why 