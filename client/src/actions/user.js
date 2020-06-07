import axios from 'axios';
import {
  ADD_TO_WATCHLIST,
  ADD_TO_WATCHEDLIST,
  GET_WATCHLIST,
  GET_WATCHEDLIST,
  REMOVE_FROM_WATCHLIST,
  REMOVE_FROM_WATCHEDLIST,
} from '../actions/types';

export const addToWatchList = (movieData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post('/api/user/addwatch', movieData, config);

    dispatch({
      type: ADD_TO_WATCHLIST,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getWatchList = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/user/getwatch');

    dispatch({
      type: GET_WATCHLIST,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getWatchedList = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/user/getwatched');

    dispatch({
      type: GET_WATCHEDLIST,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addToWatchedList = (movieData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(
      '/api/user/addwatched',
      movieData,
      config
    );

    dispatch({
      type: ADD_TO_WATCHEDLIST,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeFromWatchList = (movieId) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/user/removewatch/${movieId}`);

    dispatch({
      type: REMOVE_FROM_WATCHLIST,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeFromWatchedList = (movieId) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/user/removewatched/${movieId}`);

    dispatch({
      type: REMOVE_FROM_WATCHEDLIST,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
