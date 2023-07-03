import callApi from '../util/apiCaller';

export const SIGNUP_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';

export function singupgUserAction(user) {
  return {
    type: SIGNUP_USER,
    user,
  };
}

export function signupUserRequest(user) {
  return (dispatch) => {
    return callApi('users', 'post', {
      user: {
        name: user.name,
        password: user.password,
      },
    }).then(res => dispatch(signupSuccess(res.user)));
  };
}

export function loginUserAction(user) {
  return {
    type: LOGIN_USER,
    user,
  };
}

export function loginUserRequest(user) {
  return (dispatch) => {
    return callApi('users/login', 'post', {
      user: {
        name: user.name,
        password: user.password,
      },
    }).then(res => dispatch(signupSuccess(res.user)));
  };
}

// export const signupUser = (userData) => {
//   return async (dispatch) => {
//     try {
//       const response = await callApi('users', 'post', userData);
//       const token = response.data.token;
//       localStorage.setItem('token', token);
//       dispatch(signupSuccess(response.data.user));
//     } catch (error) {
//       dispatch(signupFailure(error.response.data));
//     }
//   };
// };

export const signupSuccess = (user) => {
  return {
    type: 'SIGNUP_SUCCESS',
    payload: user,
  };
};

export const signupFailure = (error) => {
  return {
    type: 'SIGNUP_FAILURE',
    payload: error,
  };
};

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

export const logoutUser = () => {
  localStorage.removeItem('token');
  return {
    type: 'LOGOUT',
  };
};