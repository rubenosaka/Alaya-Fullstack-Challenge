import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signupUserRequest } from '../AuthActions';
import { validateSignupForm } from '../ValidationUtils';
import { Card, CardContent, CardActions, Typography, Button, Grid } from '@material-ui/core';
import LabeledInput from '../../Form/components/LabeledInput';



const SignupForm = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.user !== null);
  const error = useSelector(state => state.auth.error);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    dispatch(signupUserRequest(formData));
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleInputChange = (e) => {
    e.persist();
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  const isFormValid = () => {
    const errors = validateSignupForm(
      formData.username,
      formData.password,
      formData.confirmPassword
    );
    setErrorMessages(errors);
    return errors.length === 0;
  };

  if (isAuthenticated) {
    return <Redirect to="/posts" />;
  }

  return (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <Grid item xs={3}>
      <Card variant="outlined">
   
            <CardContent>
             
              <Typography color="text.secondary" gutterBottom variant="h5" component="h2">
                  Join Us!
              </Typography>
        

                  {error && <div>Error: {error.message}</div>}
                  {errorMessages.length > 0 && (
                    <ul className="signup-error-messages">
                      {errorMessages.map((errorMsg, index) => (
                        <li key={index}>{errorMsg}</li>
                      ))}
                    </ul>
                  )}
              <form onSubmit={handleSignup}>
                <Grid item xs={12} class="mb-3">
                  <LabeledInput
                    label="Username"
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} class="mb-3">
                  <LabeledInput
                    label="Password"
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} class="mb-3">
                  <LabeledInput
                    label="Confirm Password"
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Button style={{ width: '100%' }} variant="contained" type="submit">Sign Up</Button>
              </form>

            </CardContent>       
        
        <CardActions>

          <Typography variant="body2" color="text.secondary">
            Already have an account? <Link to="/">Log in here</Link>
          </Typography>

        </CardActions>
      </Card>
  </Grid>
</Grid>

  );
};

export default SignupForm;