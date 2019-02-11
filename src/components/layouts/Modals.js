import React from 'react';
import { connect } from 'react-redux';
import {
  HIDE_MODAL,
  DELETE_MOVIE,
  EDIT_MOVIE
} from '../../store/actions/types';

/** ACTION FOR ADD NEW MOVIE */
import { addMovie } from '../../store/actions/moviesActions';

/** INDIVIDUAL MODALS */
import DelModal from '../Modal/DelModal';
import EditModal from '../Modal/EditModal';
import AddModal from '../Modal/AddModal';
import ErrorModal from '../Modal/ErrorModal';

function Modals(props) {
  return (
    <div>
      <DelModal
        selectedMovie={props.selectedMovie}
        hideModal={props.hideModal}
        showDelModal={props.showDelModal}
        deleteMovie={props.deleteMovie}
      />
      <EditModal
        selectedMovie={props.selectedMovie}
        hideModal={props.hideModal}
        showEditModal={props.showEditModal}
        editMovie={props.editMovie}
      />
      <AddModal
        showAddModal={props.showAddModal}
        hideModal={props.hideModal}
        addMovie={props.addMovie}
      />
      <ErrorModal
        showErrorModel={props.showErrorModel}
        hideModal={props.hideModal}
        errorMessage={props.errorMessage}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  showAddModal: state.modals.showAddModal,
  showDelModal: state.modals.showDelModal,
  showEditModal: state.modals.showEditModal,
  showErrorModel: state.modals.showErrorModel,
  errorMessage: state.modals.errorMessage
});

const mapDispatchToProps = dispatch => {
  return {
    openModal: (action, movie) => dispatch({ type: action, payload: movie }),
    hideModal: () => dispatch({ type: HIDE_MODAL }),
    addMovie: movieName => dispatch(addMovie(movieName)),
    deleteMovie: title => dispatch({ type: DELETE_MOVIE, payload: title }),
    editMovie: movie => dispatch({ type: EDIT_MOVIE, payload: movie })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modals);
