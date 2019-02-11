import React, { Component } from 'react';
import { Modal } from './Modal';

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Year: '',
      Runtime: '',
      Director: '',
      Genre: '',
      imdbID: '',
      Poster: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      Title: nextProps.selectedMovie.Title,
      Year: nextProps.selectedMovie.Year,
      Runtime: nextProps.selectedMovie.Runtime,
      Director: nextProps.selectedMovie.Director,
      Genre: nextProps.selectedMovie.Genre,
      Poster: nextProps.selectedMovie.Poster,
      imdbID: nextProps.selectedMovie.imdbID
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editMovie(this.state);
    this.props.hideModal();
  };

  render() {
    if (!this.props.showEditModal) {
      return null;
    }
    return (
      <Modal show={this.props.showEditModal} handleClose={this.props.hideModal}>
        <h3 className='modal-title'>Edit {this.props.selectedMovie.Title}</h3>
        <form className='edit-form' onSubmit={this.handleSubmit}>
          <div className='edit-form-group mt-4'>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              className='form-control'
              name='Title'
              onChange={this.handleChange}
              value={this.state.Title}
            />
          </div>
          <div className='edit-form-group mt-3'>
            <label htmlFor='name'>Year: </label>
            <input
              type='text'
              className='form-control'
              name='Year'
              onChange={this.handleChange}
              value={this.state.Year}
            />
          </div>
          <div className='edit-form-group mt-3'>
            <label htmlFor='name'>Runtime: </label>
            <input
              type='text'
              className='form-control'
              name='Runtime'
              onChange={this.handleChange}
              value={this.state.Runtime}
            />
          </div>
          <div className='edit-form-group mt-3'>
            <label htmlFor='name'>Director: </label>
            <input
              type='text'
              className='form-control'
              name='Director'
              onChange={this.handleChange}
              value={this.state.Director}
            />
          </div>
          <div className='edit-form-group mt-3'>
            <label htmlFor='name'>Genre: </label>
            <input
              type='text'
              className='form-control'
              name='Genre'
              onChange={this.handleChange}
              value={this.state.Genre}
            />
          </div>
          <div className='edit-form-group mt-3'>
            <input
              type='hidden'
              className='form-control'
              name='Genre'
              value={this.state.Poster}
            />
          </div>
          <input type='submit' className='btn btn-success box-button mt-3' />
        </form>
      </Modal>
    );
  }
}

export default EditModal;
