import { FETCH_MOVIES, ADD_MOVIE, ADD_MOVIE_ERROR } from './types';
import axios from 'axios';

const apiCalls = [
  axios.get('https://www.omdbapi.com/?&apikey=c8d3ec5b&t=Bumblebee'),
  axios.get('https://www.omdbapi.com/?&apikey=c8d3ec5b&t=The Avengers'),
  axios.get('https://www.omdbapi.com/?&apikey=c8d3ec5b&t=Escape Room'),
  axios.get('https://www.omdbapi.com/?&apikey=c8d3ec5b&t=Venom'),
  axios.get('https://www.omdbapi.com/?&apikey=c8d3ec5b&t=Halloween'),
  axios.get('https://www.omdbapi.com/?&apikey=c8d3ec5b&t=Thor')
];

export const fetchMovies = () => dispatch => {
  Promise.all(apiCalls)
    .then(res => {
      dispatch({
        type: FETCH_MOVIES,
        payload: res
      });
    })
    .catch(err => console.log(err));
};

export function addMovie(movieName) {
  return (dispatch, getState) => {
    let found;
    getState().moviesList.movies.find(item => {
      return item.data.Title.toLowerCase() === movieName.toLowerCase()
        ? (found = true)
        : (found = false);
    });

    if (!found) {
      axios
        .get('https://www.omdbapi.com/?&apikey=c8d3ec5b&t=' + movieName)
        .then(res => {
          if (res.data.Error) {
            dispatch({
              type: ADD_MOVIE_ERROR,
              payload: res.data.Error
            });
          } else {
            dispatch({
              type: ADD_MOVIE,
              payload: res
            });
          }
        });
    } else {
      dispatch({
        type: ADD_MOVIE_ERROR,
        payload: 'Movie is already here!'
      }); 
    }
  };
}
