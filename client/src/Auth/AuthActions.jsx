import callApi from '../util/apiCaller';

export const SIGNUP_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';

export function singupgUserAction(user) {
  return {
    type: SIGNUP_USER,
    user,
  };
}

export const signupSuccess = (user) => {
  return {
    type: 'SIGNUP_SUCCESS',
    payload: user,
  };
};

export const signupFailure = (error) => {
  console.log(error);
  return {
    type: 'SIGNUP_FAILURE',
    payload: error,
  };
};

export function signupUserRequest(user) {
  return async (dispatch) => {
    try {
      const response = await callApi('users/signup', 'post', {      
        username: user.username,
        password: user.password,      
      });

      if (response.user) {
        dispatch(signupSuccess({ message: 'User created successfully!' }));
      } else if (response.error) {
        dispatch(signupFailure({ message: response.error }));
      } else {
        dispatch(signupFailure({ message: 'Invalid Credentials' }))
      }
    } catch (error) {
      console.log(error);
    }
  };
}




export function loginUserAction(user) {
  return {
    type: LOGIN_USER,
    user,
  };
}

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
};

export function loginUserRequest(user) {
  return (dispatch) => {
    return callApi('users/login', 'post', {
      username: user.username,
      password: user.password,      
    }).then(res => {
      if (res.user) {
        dispatch(loginSuccess(res.user))
      } else if(res.error) {
        console.log(res.error);
      }else{
        console.log('Invalid credentials');
      }
    }).catch(error => {
      console.log(error);
    });

  };
}

export const logoutUser = () => {
  localStorage.removeItem('token');
  return {
    type: 'LOGOUT',
  };
};