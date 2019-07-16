const initialState = {
  addcircus: false,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CIRCUS': {
      return {
        ...state,
        addcircus: true,
      }
    }
    default:
      return state;
  }
}

export default admin;