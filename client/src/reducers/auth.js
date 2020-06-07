import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOAD_USER,
} from '../actions/types';

import setAuthToken from '../utils/setAuthToken';

const initialState = {
  username: null,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      setAuthToken(localStorage.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    // case LOAD_USER:
    //   return {
    //     ...state,
    //     ...payload,
    //     loading: false,
    //     isAuthenticated: true,
    //   };

    case LOGOUT:
      localStorage.setItem('token', null);
      setAuthToken(localStorage.token);
      return {
        ...state,
        username: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
