const initialState = {
  addcircus: false,
  modifycircus: false,
  loading: false,
  error: '',
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CIRCUS': {
      return {
        ...state,
        addcircus: true,
      }
    }
    case 'MODIFY_CIRCUS': {
      return {
        ...state,
        modifycircus: true,
      }
    }
    case 'START_FETCH_DELETE_CIRCUS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_DELETE_CIRCUS': {
      return {
        ...state,
        loading: false,
        error: '',
        addcircus: false,
      };
    }
    case 'FETCH_ERROR_DELETE_CIRCUS': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    case 'START_FETCH_MODIFY_CIRCUS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_MODIFY_CIRCUS': {
      return {
        ...state,
        loading: false,
        error: '',
        modifycircus: false,
      };
    }
    case 'FETCH_ERROR_MODIFY_CIRCUS': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    case 'START_FETCH_ADD_CIRCUS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_ADD_CIRCUS': {
      return {
        ...state,
        loading: false,
        error: '',
        addcircus: false,
      };
    }
    case 'FETCH_ERROR_ADD_CIRCUS': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    default:
      return state;
  }
}

export default admin;