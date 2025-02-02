import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <div className='w-full flex justify-center items-center'><span className="loading loading-dots loading-lg"></span></div> 
    }
    if(!user){
        return <Navigate state={location.pathname || '/'} to='/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;