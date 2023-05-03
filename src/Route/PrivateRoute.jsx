import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex h-screen">
                <progress className="progress mx-96 m-auto"></progress>
            </div>
        )
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }
};

export default PrivateRoute;