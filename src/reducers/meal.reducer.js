const mealReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETMEAL':
      console.log(state);
      return state.concat(action.val);
    default:
      return state;
  }
};

export default mealReducer;