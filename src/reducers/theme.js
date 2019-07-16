const initialState = {
  loading: false,
  list: [],
  error: '',
};

const themes = (state = initialState, action) => {
  switch(action.type) {
    case 'START_FETCH_THEMES': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_SUCCESS_THEMES': {
      return {
        loading: false,
        list: [...action.themes],
        error: '',
      }
    }
    case 'FETCH_ERROR_THEMES': {
      return {
        ...state,
        loading: false,
        error: action.err,
      }
    }
    default:
      return state;
  }
}

export default themes;