const mealReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETMEAL':
      state = [];
      return state.concat(action.val);
    case 'CLEAR':
      return state = [];
    default:
      return state;
  }
};

export default mealReducer;
