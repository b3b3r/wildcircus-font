const initialState = {
  loading: false,
  circus: [],
  error: '',
};


const circus = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_CIRCUS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_CIRCUS': {
      const circus = action.circus;
      return {
        ...state,
        loading: false,
        circus,
        error: '',
      };
    }
    case 'FETCH_ERROR_CIRCUS': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    default:
      return state;
  }
};

export default circus;
