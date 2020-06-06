import { GET_POPULAR, SEARCH_MOVIES } from '../actions/types';

const initialState = {
  movies: [],
  movie: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POPULAR:
      return {
        ...state,
        movies: payload,
        loading: false,
      };

    case SEARCH_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false,
      };

    default:
      return state;
  }
}
