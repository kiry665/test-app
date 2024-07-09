import {React} from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ element: children }) {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/login" />
    );
}

export default ProtectedRoute;
