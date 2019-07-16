const initialState = {
  addcircus: false,
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