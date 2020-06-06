import { combineReducers } from 'redux';
import movie from './movies';
import auth from './auth';

export default combineReducers({
  movie,
  auth,
});
