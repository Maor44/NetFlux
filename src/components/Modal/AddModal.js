import React, { Component } from 'react';
import { Modal } from '../Modal/Modal';

class AddModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieName: '',
      load: false
    };
  }

  handleChange = e => {
    this.setState({ movieName: e.target.value });
  };

  handleSubmit = () => {
    let movieName = this.state.movieName.toLowerCase();
    this.props.addMovie(movieName);
    this.setState({ movieName: '', load: true });

    setTimeout(() => {
      this.setState({ load: false });
      this.props.hideModal();
    }, 1500);
  };

  render() {
    const isValid = this.state.movieName.length < 2 ? true : false;
    if (!this.props.showAddModal) {
      return null;
    }
    return (
      <Modal show={this.props.showAddModal} handleClose={this.props.hideModal}>
        <h3 className='modal-title add-modal-title'>Add New Movie</h3>
        <div className='add-modal form-inline'>
          <div className='form-group mx-sm-3 mb-2'>
            <label htmlFor='movieName' className='sr-only'>
              Movie Name
            </label>
            <input
              type='text'
              className='form-control add-modal-input'
              name='movieName'
              onChange={this.handleChange}
              placeholder='Movie Name'
              value={this.state.movieName}
            />
          </div>
          <button
            className='btn btn-primary mb-2 box-button add-modal-btn'
            onClick={this.handleSubmit}
            disabled={isValid}
          >
            Add
          </button>
          <div
            className='load-modal'
            style={this.state.load ? { display: 'flex' } : { display: 'none' }}
          >
            wait...
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddModal;
