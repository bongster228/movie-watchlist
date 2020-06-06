import {
  GET_POPULAR,
  SEARCH_MOVIES,
  SET_SEARCH,
  CLEAR_MOVIES,
} from '../actions/types';

const initialState = {
  movies: [],
  movie: null,
  loading: true,
  isSearching: false,
  searchTerm: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POPULAR:
      return {
        ...state,
        movies: [...state.movies, ...payload],
        loading: false,
      };

    case SET_SEARCH:
      return {
        ...state,
        isSearching: true,
        searchTerm: payload,
      };

    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
        loading: false,
      };

    case SEARCH_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...payload],
        loading: false,
      };

    default:
      return state;
  }
}
