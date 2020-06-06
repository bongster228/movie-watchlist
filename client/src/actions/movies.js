import axios from 'axios';
import { GET_POPULAR, MOVIE_ERROR } from './types';

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
