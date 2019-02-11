import React from 'react';
import '../../style/Modal.css';

import { SHOW_DEL_MODAL, SHOW_EDIT_MODAL } from '../../store/actions/types';

function MovieItem(props) {
  return (
    <div className='col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-6 col-xl-4'>
      <div className='box'>
        <img src={props.movie.Poster} className='box-img-top' alt='poster' />
        <div className='box-body'>
          <h5 className='box-title'>{props.movie.Title}</h5>
          <div className='box-text'>
            <p>Year: {props.movie.Year}</p>
            <p>Genre: {props.movie.Genre}</p>
            <p>Runtime: {props.movie.Runtime}</p>
            <p>Director: {props.movie.Director}</p>
          </div>
        </div>
        <div className='box-buttons'>
          <button
            className='btn btn-danger box-button'
            onClick={() => props.openModal(SHOW_DEL_MODAL, props.movie)}
          >
            Delete
          </button>
          <button
            className='btn btn-info box-button'
            onClick={() => props.openModal(SHOW_EDIT_MODAL, props.movie)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
