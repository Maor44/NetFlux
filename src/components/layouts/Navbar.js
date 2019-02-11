import React from 'react';

export default function Navbar(props) {
  function handleModalClick(action) {
    props.openModal(action);
  }

  return (
    <nav className='navbar navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <h1 className='navbar-brand'>NetFlux</h1>
        <button
          className='btn btn-outline-warning my-2 my-sm-0 add-movie-btn'
          onClick={() => handleModalClick(props.action)}
        >
          Add Movie
        </button>
      </div>
    </nav>
  );
}
