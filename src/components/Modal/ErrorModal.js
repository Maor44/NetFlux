import React from 'react';
import { Modal } from '../Modal/Modal';

export default function ErrorModal(props) {
  return (
    <div>
      <Modal show={props.showErrorModel} handleClose={props.hideModal}>
        <h1>{props.errorMessage}</h1>
      </Modal>
    </div>
  );
}
