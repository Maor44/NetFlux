import React from 'react';
import { Modal } from '../Modal/Modal';

function DelModal(props) {
  function handleRemoveClick(movieName) {
    props.deleteMovie(movieName);
    props.hideModal();
  }

  if (!props.showDelModal) {
    return null;
  }
  return (
    <Modal show={props.showDelModal} handleClose={props.hideModal}>
      <h3 className='modal-title delete-modal-title'>
        Delete {props.selectedMovie.title}?
      </h3>
      <div className='modal-box-buttons delete-modal-buttons'>
        <button
          className='btn btn-danger box-button'
          onClick={() => handleRemoveClick(props.selectedMovie.title)}
        >
          Yes
        </button>
        <button className='btn btn-info box-button' onClick={props.hideModal}>
          No
        </button>
      </div>
    </Modal>
  );
}

export default DelModal;
