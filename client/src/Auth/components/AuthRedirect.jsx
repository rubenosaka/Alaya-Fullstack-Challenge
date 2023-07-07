import { Navigate, useLocation, useMatch } from 'react-router-dom';
import { decodeAuthToken } from '../Auth';

const AuthRedirect = ({ activeSection, loginRoute, registerRoute, defaultRoute }) => {
    const location = useLocation();
    const path = useMatch(activeSection);
    const decodedToken = decodeAuthToken();
   
    return !decodedToken ? <Navigate to={location.pathname === loginRoute || location.pathname === registerRoute ? path : defaultRoute} /> : <Navigate to={location.pathname === loginRoute || location.pathname === registerRoute ? defaultRoute : path} />;
};

export default AuthRedirect;
