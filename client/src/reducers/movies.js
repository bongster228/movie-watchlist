import {
  GET_POPULAR,
  SEARCH_MOVIES,
  SET_SEARCH,
  CLEAR_MOVIES,
  SET_PAGE_NUM,
  RESET_PAGE_NUM,
} from '../actions/types';

const initialState = {
  movies: [],
  movie: null,
  loading: true,
  isSearching: false,
  searchTerm: null,
  pageNum: 1,
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
        isSearching: payload.isSearching,
        searchTerm: payload.searchTerm,
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

    case SET_PAGE_NUM:
      return {
        ...state,
        loading: false,
        pageNum: payload,
      };

    case RESET_PAGE_NUM:
      return {
        ...state,
        loading: false,
        pageNum: 1,
      };

    default:
      return state;
  }
}
