import { combineReducers } from 'redux';
import movie from './movies';
import auth from './auth';
import user from './user';

export default combineReducers({
  movie,
  auth,
  user,
});
