const initialState = {
  loading: false,
  themes: [],
  error: '',
};

const themes = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_THEMES': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_SUCCESS_THEME': {
      const themes = action.themes;      
      return {
        ...state,
        loading: false,
        themes,
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