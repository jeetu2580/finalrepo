import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute  = ({component: Component, isLoggedIn, userdata, ...rest}) =>

(<Route {...rest} render={(props)=>(isLoggedIn===true ? 
     (<Component isLoggedIn={true} userdataa={userdata} {...props} />):
 ( (<Redirect to="/login"  isLoggedIn={isLoggedIn}/>)))}/>)


export default ProtectedRoute;