const foodReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETFOOD':
      return action.val;
    case 'ADDFOOD':
      return state.concat(action.val);
    default:
      return state;
  }
};

export default foodReducer;
