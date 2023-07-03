import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginUserRequest } from '../AuthActions';
import { Card, CardContent, Typography, Button, Grid, CardActions } from '@material-ui/core';
import LabeledInput from '../../Form/components/LabeledInput';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.user !== null);
  const error = useSelector(state => state.auth.error);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserRequest(formData));
    setFormData({
      username: '',
      password: '',
    });
  };

  const handleInputChange = (e) => {
    e.persist();
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isAuthenticated) {
         return <Redirect to="/posts" />;
    }
  }, [isAuthenticated]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom variant="h5" component="h2">
              Login
            </Typography>
            {error && <div className="login-error">Error: {error.message}</div>}
            <form onSubmit={handleLogin}>
              <Grid item xs={12} className="mb-3">
                <LabeledInput
                  label="Username"
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  autoComplete={true}
                />
              </Grid>
              <Grid item xs={12} className="mb-3">
                <LabeledInput
                  label="Password"
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete={true}
                />
              </Grid>
              <Button style={{ width: '100%' }} variant="contained" type="submit">Log In</Button>
            </form>

          </CardContent>
          <CardActions>

            <Typography variant="body2" color="textSecondary" className="login-text">
              Not registered? <Link to="/register" className="login-link">Sign up here</Link>
            </Typography>

          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;