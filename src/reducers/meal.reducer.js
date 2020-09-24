const mealReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETMEAL':
      return state.concat(action.val);
    case 'DEL':
        return state = [];
    default:
      return state;
  }
};

export default mealReducer;