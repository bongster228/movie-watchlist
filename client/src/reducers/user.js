import {
  ADD_TO_WATCHEDLIST,
  ADD_TO_WATCHLIST,
  GET_WATCHLIST,
  GET_WATCHEDLIST,
  REMOVE_FROM_WATCHLIST,
  REMOVE_FROM_WATCHEDLIST,
  LOGOUT,
} from '../actions/types';

const initialState = {
  watchList: [],
  watchedList: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_WATCHLIST:
    case GET_WATCHLIST:
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchList: payload,
        loading: false,
      };

    case ADD_TO_WATCHEDLIST:
    case GET_WATCHEDLIST:
    case REMOVE_FROM_WATCHEDLIST:
      return {
        ...state,
        watchedList: payload,
        loading: false,
      };

    case LOGOUT:
      return {
        watchList: [],
        watchedList: [],
        loading: false,
      };

    default:
      return state;
  }
}
