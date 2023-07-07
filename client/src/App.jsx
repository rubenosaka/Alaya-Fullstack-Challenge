import PropTypes from 'prop-types';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import AuthRedirect from './Auth/components/AuthRedirect';
import Login from './Auth/components/Login'; 
import SignupForm from './Auth/components/SingupForm';
import PostListPage from './Post/pages/PostListPage/PostListPage';
import PostDetailPage from './Post/pages/PostDetailPage/PostDetailPage';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider, Box } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Nav/components/Navbar';

const theme = createTheme ({
    palette: {
        primary: {
            main: '#1ecde2',
        },
    },
});

function App(props) {
    const location = useLocation(); 
     return (
      <ThemeProvider theme={theme}>
            
            <div className="w-100">
                <Provider store={props.store}>   
                <Box style={{padding:'15px', marginBottom:'15px'}}>
                    <Navbar activeSection={location.pathname} />
                </Box>         
                <AuthRedirect
                    activeSection={location.pathname}
                    loginRoute="/login"
                    registerRoute="/register"
                    defaultRoute="/"
                />
                <Routes>  
                    <Route path="/" exact element={<PostListPage showAddPost={false}/>}></Route>
                    <Route path="/login" exact element={<Login />}></Route>                     
                    <Route path="/register" exact element={<SignupForm />} />
                    <Route path="/posts" exact element={<PostListPage showAddPost={true}/>} />
                    <Route path="/posts/:cuid/:slug" exact element={<PostDetailPage />} />               
                </Routes>            
                </Provider>              
            </div>
      </ThemeProvider>
    );
}

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;