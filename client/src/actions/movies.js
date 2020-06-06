import axios from 'axios';
import { GET_POPULAR, SEARCH_MOVIES, MOVIE_ERROR } from './types';

export const getPopularMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('api/movie/popular');

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

export const searchMovies = (formData) => async (dispatch) => {
  try {
    const config = {
      'Content-Type': 'application/json',
    };

    const { searchTerm } = formData;

    const response = await axios.get(`api/movie/search/${searchTerm}`, config);

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
