const foodReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETFOOD':
      state = []; // eslint-disable-line no-param-reassign
      return state.concat(action.val);
    case 'ADDFOOD':
      return state.concat(action.val);
    default:
      return state;
  }
};

export default foodReducer;
