const mealReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETMEAL':
      state = []; // eslint-disable-line no-param-reassign
      return state.concat(action.val);
    default:
      return state;
  }
};

export default mealReducer;
