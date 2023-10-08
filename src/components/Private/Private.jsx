import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    

    if (loading) {
        return <span className="loading loading-spinner loading-lg mt-36 ml-36"></span>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Private;