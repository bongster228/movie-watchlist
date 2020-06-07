import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOAD_USER,
} from './types';

export const registerUser = (formData, history) => async (dispatch) => {
  try {
    const config = {
      'Content-Type': 'application/json',
    };

    const response = await axios.post('/api/auth/register', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });

    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (formData, history) => async (dispatch) => {
  try {
    const config = {
      'Content-Type': 'application/json',
    };

    const response = await axios.post('/api/auth/login', formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });

    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

// export const loadUser = () => async (dispatch) => {
//   try {
//     const response = await axios.get('/api/auth');

//     console.log(response);

//     dispatch({
//       type: LOAD_USER,
//       payload: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const logout = (history) => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });

    history.push('/');
  } catch (err) {
    console.log(err);
  }
};
