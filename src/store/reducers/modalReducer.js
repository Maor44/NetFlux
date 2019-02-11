import {
  SHOW_DEL_MODAL,
  SHOW_EDIT_MODAL,
  HIDE_MODAL,
  SHOW_ADD_MODAL,
  ADD_MOVIE_ERROR
} from '../actions/types';

const initialState = {
  showDelModal: false,
  showEditModal: false,
  showAddModal: false,
  showErrorModel: false,
  selectedMovie: {},
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DEL_MODAL:
      return {
        ...state,
        showDelModal: true,
        selectedMovie: { title: action.payload.Title }
      };

    case SHOW_EDIT_MODAL:
      return {
        ...state,
        selectedMovie: action.payload,
        showEditModal: true
      };

    case SHOW_ADD_MODAL:
      return {
        ...state,
        showAddModal: true
      };

    case HIDE_MODAL:
      return {
        showDelModal: false,
        showEditModal: false,
        showAddModal: false,
        selectedMovie: {}
      };

    case ADD_MOVIE_ERROR:
      return {
        ...state,
        showErrorModel: true,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};
