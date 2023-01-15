import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivatRoute = ({ children, path }) => {
    const token = useSelector(state => state.auth.token);
    return token ? children : <Navigate to={path} replace />;
};

export const PublicRoute = ({ children, path }) => {
    const token = useSelector(state => state.auth.token);
    return !token ? children : <Navigate to={path} replace />;
};