import {
  FETCH_MOVIES,
  DELETE_MOVIE,
  EDIT_MOVIE,
  ADD_MOVIE
} from '../actions/types';

const initialState = {
  movies: [],
  movie: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };

    case DELETE_MOVIE:
      let delMovies = state.movies.filter(movie => {
        return action.payload !== movie.data.Title;
      });
      return {
        movies: delMovies
      };

    case EDIT_MOVIE:
      state.movies.find(movie =>
        movie.data.imdbID === action.payload.imdbID
          ? (movie.data = action.payload)
          : null
      );
      const editMovies = [...state.movies];

      return {
        ...state,
        movies: editMovies
      };

    case ADD_MOVIE:
      const movie = action.payload;
      const movies = [...state.movies, movie];

      return {
        ...state,
        movies
      };

    default:
      return state;
  }
};
