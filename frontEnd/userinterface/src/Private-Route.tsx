import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token')
    const isAuthenticated = !!token;
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
