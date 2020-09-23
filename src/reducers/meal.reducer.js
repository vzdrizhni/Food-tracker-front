const mealReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETMEAL':
      return state.concat(action.val);
    default:
      return state;
  }
};

export default mealReducer;