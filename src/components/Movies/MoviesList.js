import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/movie-list.css';

import Navbar from '../layouts/Navbar';
import MovieItem from './MovieItem';
import { fetchMovies } from '../../store/actions/moviesActions';

import { SHOW_ADD_MODAL, HIDE_MODAL } from '../../store/actions/types';
import Modals from '../layouts/Modals';

class MoviesList extends Component {
  componentDidMount = () => {
    this.props.fetchMovies();
  };

  render() {
    const movies =
      this.props.movies.length > 0 ? (
        this.props.movies.map(res => {
          return (
            <MovieItem
              movie={res.data}
              key={res.data.imdbID}
              openModal={this.props.openModal}
              hideModal={this.props.hideModal}
            />
          );
        })
      ) : (
        <h1 className='main-title'>No Movies Here!</h1>
      );
    return (
      <div>
        <Navbar action={SHOW_ADD_MODAL} openModal={this.props.openModal} />

        <div className='container card-list'>
          <div className='row'>{movies}</div>
          <Modals
            selectedMovie={this.props.selectedMovie}
            hideModal={this.props.hideModal}
            openModal={this.props.openModal}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.moviesList.movies,
  selectedMovie: state.modals.selectedMovie
});

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    },
    openModal: (action, movie) => dispatch({ type: action, payload: movie }),
    hideModal: () => dispatch({ type: HIDE_MODAL })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
