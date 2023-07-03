import React from 'react';
import PropTypes from 'prop-types';
import { createTheme , ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Login from './Auth/components/Login'; 
import SignupForm from './Auth/components/SingupForm';
import PostListPage from './Post/pages/PostListPage/PostListPage';
import PostDetailPage from './Post/pages/PostDetailPage/PostDetailPage';
import { Provider } from 'react-redux';

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
    const activeSection = location.pathname.split('/')[1];
    return (
      <ThemeProvider theme={theme}>
          <div className="w-100">
              <Navbar activeSection={activeSection} />
              <div className="w-100">
                  <Provider store={props.store}>                    
                    <Switch>                        
                        <Route path="/" exact component={Login} />
                        <Route path="/register" exact component={SignupForm} />
                        <Route path="/posts" exact component={PostListPage} />
                        <Route path="/posts/:cuid/:slug" exact component={PostDetailPage} />
                    </Switch>            
                  </Provider>
              </div>
          </div>
      </ThemeProvider>
    );
}

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;