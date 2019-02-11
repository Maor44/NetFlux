import { combineReducers } from 'redux';
import moviesReducers from './moviesReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  moviesList: moviesReducers,
  modals: modalReducer
});
