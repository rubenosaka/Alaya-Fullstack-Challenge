import { useSelector } from 'react-redux';
import { Navigate, useLocation, useMatch } from 'react-router-dom';

const AuthRedirect = ({ activeSection, loginRoute, registerRoute, defaultRoute }) => {
    const location = useLocation();
    const path = useMatch(activeSection);
    const isAuthenticated = useSelector(
        (state) => {
            console.log(state);
            return state.auth.user !== null
        }
    );
    const notAuthenticated = !isAuthenticated && location.pathname !== loginRoute && location.pathname !== registerRoute && location.pathname !== defaultRoute;

    return notAuthenticated ? <Navigate to={defaultRoute} /> : <Navigate to={path} />;
};

export default AuthRedirect;
