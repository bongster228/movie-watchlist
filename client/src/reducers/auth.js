import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOAD_USER,
} from '../actions/types';

const initialState = {
  username: null,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  watchList: [],
  watchedList: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case LOAD_USER:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };

    case LOGOUT:
      localStorage.setItem('token', null);
      return {
        ...state,
        username: null,
        token: null,
        isAuthenticated: false,
        watchedList: [],
        watchList: [],
        loading: false,
      };

    default:
      return state;
  }
}
