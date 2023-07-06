import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginUserRequest } from '../AuthActions';
import { validateLoginForm } from '../ValidationUtils';
import { Card, CardContent, Typography, Button, Grid, CardActions } from '@mui/material';
import LabeledInput from '../../Form/components/LabeledInput';
import FormErrors from '../../Form/components/FormErrors';


const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.user !== null);
  const error = useSelector(state => state.auth.error);
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const isFormValid = () => {
    const errors = validateLoginForm(
      formData.username,
      formData.password,
    );
    setErrorMessages(errors);
    return errors.length === 0;
  };

  const handleLogin = async (e) => {

    e.preventDefault();

    if (!isFormValid()) {
      return;
    }
    
    try {
      await dispatch(loginUserRequest(formData));
    } catch (error) {
      console.log(error);
      setFormData({
        password: '',
      });
    }

  };

  const handleInputChange = (e) => {
    e.persist();
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  if (isAuthenticated) {
    return <Navigate to="/posts" />;
  }


  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="top"     
    >
      <Grid item xs={3} style={{ maxWidth: '300px' }}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom variant="h5" component="h2">
              Login
            </Typography>
            <FormErrors error={error} errorMessages={errorMessages} />
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
              <Button style={{ width: '100%' }} variant="contained" type="submit">
                Log In
              </Button>
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
