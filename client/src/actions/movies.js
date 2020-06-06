import axios from 'axios';
import {
  GET_POPULAR,
  SEARCH_MOVIES,
  MOVIE_ERROR,
  SET_SEARCH,
  CLEAR_MOVIES,
  RESET_PAGE_NUM,
  SET_PAGE_NUM,
} from './types';

export const getPopularMovies = (pageNum) => async (dispatch) => {
  try {
    const response = await axios.get(`api/movie/popular/${pageNum}`);

    dispatch({
      type: GET_POPULAR,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: MOVIE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const searchMovies = (formData, pageNum) => async (dispatch) => {
  try {
    const config = {
      'Content-Type': 'application/json',
    };

    const response = await axios.get(
      `api/movie/search/${formData}/${pageNum}`,
      config
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: MOVIE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const setSearchTerm = (formData, isSearching = true) => (dispatch) => {
  try {
    dispatch({
      type: SET_SEARCH,
      payload: {
        searchTerm: formData,
        isSearching,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearMovies = () => (dispatch) => {
  try {
    dispatch({
      type: CLEAR_MOVIES,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setPageNum = (num) => {
  return {
    type: SET_PAGE_NUM,
    payload: num,
  };
};

export const resetPageNum = () => {
  return {
    type: RESET_PAGE_NUM,
  };
};
